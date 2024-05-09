"use client"

import { useAmbientColor } from "@/stores/ambient-color.store"

export function AmbientColor() {
  const { ambientColor } = useAmbientColor((state) => state)

  return (
    <>
      <div
        style={{ '--ambient-color': ambientColor } as React.CSSProperties}
        className="transition duration-500 absolute top-0 left-0 w-full z-0 bg-[hsl(var(--ambient-color))]/30 h-64"
      />
      <div className="bg-gradient-to-t from-background absolute top-0 left-0 w-full z-0 h-64" />
    </>
  )
}
