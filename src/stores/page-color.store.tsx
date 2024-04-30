import { createStore } from 'zustand/vanilla'

interface PageColorState {
  pageColor: string
}

interface PageColorActions {
  updatePageColor: (color: string) => void
}

export type PageColorStore = PageColorState & PageColorActions

export const defaultInitState: PageColorState = {
  pageColor: '0 73% 59%',
}

export const initPageColorStore = (): PageColorState => {
  return { ...defaultInitState }
}

export const createPageColorStore = (
  initState: PageColorState = defaultInitState,
) => {
  return createStore<PageColorStore>()((set) => ({
    ...initState,
    updatePageColor: (color) => set(() => ({ pageColor: color })),
  }))
}

