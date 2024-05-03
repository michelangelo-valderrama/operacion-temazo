"use client"

import { usePageColorStore } from "@/providers/page-color.provider"

export function PageColor() {
  const { pageColor } = usePageColorStore((state) => state)
  return (
    <>
      <div
        style={{ '--page-color': pageColor } as React.CSSProperties}
        className="transition duration-500 absolute top-0 left-0 w-full z-0 bg-[hsl(var(--page-color))]/30 h-64"
      />
      <div className="bg-gradient-to-t from-background absolute top-0 left-0 w-full z-0 h-64" />
    </>
  )
}
