"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePageColorStore } from "@/providers/page-color.provider";
import { Button } from "@/components/ui/button";

export function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pageColor } = usePageColorStore((state) => state)
  return (
    <div
      style={{ '--page-color': pageColor } as React.CSSProperties}
      className="bg-background flex-1 relative"
    >
      <header className="pt-4 pb-2 px-2 sm:px-4 xl:px-8 absolute top-0 left-0 z-20">
        <div className="flex gap-x-2 *:rounded-full *:size-9">
          <Button size="icon" variant="ghost" className="bg-background/60 hover:bg-background">
            <ChevronLeft />
          </Button>
          <Button size="icon" variant="ghost" disabled className="bg-background/60">
            <ChevronRight />
          </Button>
        </div>
      </header>
      <main className="relative z-10 px-2 sm:px-4 xl:px-8 pt-16 size-full">
        {children}
      </main>
      <div className="absolute top-0 left-0 w-full z-0 bg-gradient-to-b from-[hsl(var(--page-color))]/30 h-64" />
    </div>
  )
}