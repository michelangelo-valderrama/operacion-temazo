"use client"

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAmbientColor } from "@/stores/ambient-color.store";
import { Button } from "@/components/ui/button";

interface HomeBannerProps extends React.HTMLAttributes<HTMLElement> { }

export function HomeBanner({ className }: HomeBannerProps) {
  const { setColor } = useAmbientColor((state) => state)

  const handleMouseEnter = () => {
    setColor("360 76% 60%")
  }

  const handleMouseLeave = () => {
    setColor()
  }

  return (
    <aside
      style={{ '--ambient-color': '360 76% 60%' } as React.CSSProperties}
      className={cn("rounded-md max-w-[1000px] mx-auto", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`
        rounded-md p-3
        flex gap-x-4 lg:gap-x-6 items-end
        bg-gradient-to-br from-[hsl(var(--ambient-color))] to-50% to-black
      `}>
        <div className="size-36 sm:size-40 lg:size-52 rounded-md">
          <Image src="/song-image.png" alt="Image" width="207" height="206" className="object-cover size-full rounded-md" />
        </div>
        <div className="flex flex-col pb-2">
          <section className="mb-4 lg:mb-6 flex flex-col gap-y-1 truncate">
            <h2 className="uppercase font-bold *:block">
              <span className="text-xs sm:text-base md:text-lg lg:text-2xl">Ganador</span>
              <span className="sm:text-lg md:text-2xl lg:text-4xl">2ª edición 2024</span>
            </h2>
            <p className="text-sm md:text-base text-foreground/80">
              Lorem ipsum · Dolor sit amet
            </p>
          </section>
          <div className="flex gap-x-2 sm:gap-x-4">
            <Link href="/track/20">
              <Button className="h-8 rounded-md px-3 sm:h-10 sm:px-4 sm:py-2 md:h-11 md:rounded-md md:px-8">Escuchar</Button>
            </Link>
            <Button className="h-8 rounded-md px-3 sm:h-10 sm:px-4 sm:py-2 md:h-11 md:rounded-md md:px-8" variant="outline">Ver clip</Button>
          </div>
        </div>
      </div>
    </aside>

  )
}