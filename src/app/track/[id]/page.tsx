"use client"

import { useEffect } from "react"
import { usePageColorStore } from "@/providers/page-color.provider"

export default function Page() {
  const { updatePageColor } = usePageColorStore((state) => state)

  useEffect(() => {
    updatePageColor()
  }, [])

  return (
    <h1>Track</h1>
  )
}