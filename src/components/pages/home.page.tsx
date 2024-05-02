"use client"

import { useEffect } from "react";
import { usePageColorStore } from "@/providers/page-color.provider";
import { HomeBanner } from "@/components/home-banner";
import { Editions } from "@/components/editions";

export function HomePage() {
  const { updatePageColor } = usePageColorStore(state => state)

  useEffect(() => {
    updatePageColor("0 0 40%")
  }, [])

  return (<div className="size-full">
    <div className="relative z-10">
      <HomeBanner className="mb-8" />
      <Editions></Editions>
    </div>
  </div>)
}