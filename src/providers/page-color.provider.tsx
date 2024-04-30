'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type PageColorStore, createPageColorStore, initPageColorStore } from '@/stores/page-color.store'

export const PageColorStoreContext = createContext<StoreApi<PageColorStore> | null>(
  null,
)

export interface PageColorStoreProviderProps {
  children: ReactNode
}

export const PageColorStoreProvider = ({
  children,
}: PageColorStoreProviderProps) => {
  const storeRef = useRef<StoreApi<PageColorStore>>()
  if (!storeRef.current) {
    storeRef.current = createPageColorStore(initPageColorStore())
  }

  return (
    <PageColorStoreContext.Provider value={storeRef.current}>
      {children}
    </PageColorStoreContext.Provider>
  )
}

export const usePageColorStore = <T,>(
  selector: (store: PageColorStore) => T,
): T => {
  const counterStoreContext = useContext(PageColorStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
