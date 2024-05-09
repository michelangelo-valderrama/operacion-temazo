import { COLORS } from "@/config"
import { create } from "zustand"

interface AmbientColorState {
  ambientColor: string
}

interface AmbientColorActions {
  setColor: (color?: string) => void
}

export type PageColorStore = AmbientColorState & AmbientColorActions

const initState: AmbientColorState = {
  ambientColor: COLORS.defaultAmbientColor.hsl,
}

export const useAmbientColor = create<PageColorStore>()((set) => ({
  ambientColor: initState.ambientColor,
  setColor: (color) => set(() => ({ ambientColor: color ?? initState.ambientColor })),
}))
