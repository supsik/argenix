'use client';

import { type ReactNode, createContext, useState, useContext } from 'react';
import { useStore } from 'zustand';

import { type AppsStore, createAppsStore } from '@/store/apps/apps-store';

export type AppsStoreApi = ReturnType<typeof createAppsStore>;

export const AppsStoreContext = createContext<AppsStoreApi | undefined>(undefined);

export interface AppsStoreProviderProps {
  children: ReactNode
}

export const AppsStoreProvider = ({ children }: AppsStoreProviderProps) => {
  const [store] = useState(() => createAppsStore());

  return <AppsStoreContext.Provider value={store}>{children}</AppsStoreContext.Provider>;
}

export const useAppsStore = <T,>(selector: (store: AppsStore) => T): T => {
  const appsStoreContext = useContext(AppsStoreContext);

  if (!appsStoreContext)
    throw new Error(`useAppsStore must be used within AppsStoreProvider`);

  return useStore(appsStoreContext, selector);
}
