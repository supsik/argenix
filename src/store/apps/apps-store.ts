import { createStore } from 'zustand/vanilla';
import { AppType } from '@/lib/constants/types';

export type AppsState = {
  openedApps: Array<AppType>,
  focusedApp: null | AppType,
}

export type AppsActions = {
  openApp     : (app : AppType) => void,
  closeApp    : (id  : AppType['id']) => void,
  expandApp   : (id  : AppType['id']) => void,
  fullsizeApp : (id  : AppType['id']) => void,
  focusApp    : (id  : AppType['id']) => void,
  setCoords   : (id  : AppType['id'], coords: AppType['coords']) => void,
}

export type AppsStore = AppsState & AppsActions

export const createAppsStore = () => {
  return createStore<AppsStore>()(set => ({
    openedApps: [],
    focusedApp: null,
    openApp: app => set(state => {
      const appWithCoords = {
        ...app,
        coords: { x: 0, y: 0 },
      };

      return {
        openedApps: [...state.openedApps, appWithCoords],
        focusedApp: appWithCoords,
      };
    }),
    closeApp: id => set(state => ({
      openedApps: state.openedApps.filter(el => el.id !== id),
      focusedApp: state.focusedApp && id == state.focusedApp.id ? null : state.focusedApp,
    })),
    expandApp: id => set(state => ({
      openedApps: state.openedApps.map(app =>
        app.id === id ? { ...app, expanded: !app.expanded } : app
      ),
    })),
    focusApp: id => set(state => ({
      focusedApp: state.openedApps.find(el => el.id == id),
    })),
    fullsizeApp: id => set(state => ({
      openedApps: state.openedApps.map(app =>
        app.id === id ? { ...app, fullsized: !app.fullsized } : app
      ),
    })),
    setCoords: (id, coords) => set(state => ({
      openedApps: state.openedApps.map(app =>
        app.id === id ? { ...app, coords } : app
      ),
    })),
  }))
}