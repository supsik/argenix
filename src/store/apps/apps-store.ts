import { createStore } from 'zustand/vanilla';
import { AppType }     from '@/lib/constants/types';

export type AppsState = {
  openedApps: Array<AppType>;
  focusedApp: null | AppType;
};

export type AppsActions = {
  fullsizeApp : (id: AppType['id']) => void;
  expandApp   : (id: AppType['id']) => void;
  setCoords   : (id: AppType['id'], coords: NonNullable<AppType['coords']>) => void;
  closeApp    : (id: AppType['id']) => void;
  focusApp    : (id: AppType['id']) => void;
  openApp     : (app: AppType) => void;
};

export type AppsStore = AppsState & AppsActions;

const reorderApps = (
  apps: Array<AppType>,
  targetId: AppType['id'],
) => {
  const targetApp = apps.find(app => app.id === targetId);

  if (!targetApp) return apps;

  const targetZIndex = targetApp.zIndex ?? 0;
  const maxZIndex    = Math.max(0, ...apps.map(app => app.zIndex ?? 0));

  return apps.map(app => {
    if (app.id === targetId)
      return { ...app, zIndex: maxZIndex };

    const zIndex = app.zIndex ?? 0;

    if (zIndex > targetZIndex)
      return { ...app, zIndex: zIndex - 1 };

    return app;
  });
};

export const createAppsStore = () => {
  return createStore<AppsStore>()(set => ({
    openedApps: [],
    focusedApp: null,

    openApp: app => set(state => {
      const maxZIndex = Math.max(
        0,
        ...state.openedApps.map(el => el.zIndex ?? 0),
      );

      const appWithCoords: AppType = {
        ...app,
        coords: { x: 0, y: 0 },
        zIndex: maxZIndex + 1,
      };

      return {
        openedApps: [...state.openedApps, appWithCoords],
        focusedApp: appWithCoords,
      };
    }),

    closeApp: id => set(state => {
      const openedApps = reorderApps(state.openedApps.filter(el => el.id !== id), state.focusedApp?.id === id ?
      state.openedApps.filter(el => el.id !== id).reduce<AppType | null>((top, app) =>!top || (app.zIndex ?? 0) > (top.zIndex ?? 0)? app : top, null, )?.id ?? id : state.focusedApp?.id ?? id,);

      const focusedApp = state.focusedApp?.id === id ? openedApps.at(-1) ?? null : state.focusedApp ? openedApps.find(el => el.id === state.focusedApp?.id) ?? null : null;
    
      return {
        openedApps,
        focusedApp,
      };
    }),

    expandApp: id => set(state => ({
      openedApps: state.openedApps.map(app => app.id === id ? { ...app, expanded: !app.expanded } : app),
    })),

    focusApp: id => set(state => {
      const openedApps = reorderApps(state.openedApps, id);
      const focusedApp = openedApps.find(app => app.id === id) ?? null;

      return {
        openedApps,
        focusedApp,
      };
    }),

    fullsizeApp: id => set(state => ({
      openedApps: state.openedApps.map(app => app.id === id ? { ...app, fullsized: !app.fullsized } : app),
    })),

    setCoords: (id, coords) => set(state => ({
      openedApps: state.openedApps.map(app => app.id === id ? { ...app, coords } : app),
    })),
  }));
};