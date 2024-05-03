"use client"

import React from "react"
import { PageColorStoreProvider } from "@/providers/page-color.provider"

export function UsePageColor({ children }: { children: React.ReactNode }) {
  return (
    <PageColorStoreProvider>
      {children}
    </PageColorStoreProvider>
  )
}