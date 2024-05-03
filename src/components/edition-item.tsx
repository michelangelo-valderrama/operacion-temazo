"use client"

import Image from "next/image"
import Link from "next/link"
import type { Edition } from "@/types/editions"
import { formatDateToLocal, formatDuration } from "@/lib/utils"
import { PlayButton } from "@/components/play-button"
import { usePageColorStore } from "@/providers/page-color.provider"

type EditionItemProps = Edition

export function EditionItem({ release_date, video, edition_number, id }: EditionItemProps) {
  const { updatePageColor } = usePageColorStore((state) => state)

  const formattedDate = formatDateToLocal({
    dateStr: release_date,
    format: {
      day: 'numeric',
      month: 'short',
    }
  })

  const formattedDuration = formatDuration(video.duration_ms)

  const handleMouseEnter = () => {
    updatePageColor("60 94% 55%")
  }

  const handleMouseLeave = () => {
    updatePageColor()
  }

  return (
    <Link
      href={`/edition/${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex flex-col bg-muted/60 hover:bg-accent rounded-lg transition group max-w-80 hover:cursor-pointer"
      >
        <div className="relative">
          <Image className="size-full object-cover aspect-video" src="/ot-1.png" alt="OT 1" width={302} height={171} />
          <PlayButton
            className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute right-2 bottom-3 shadow-xl hover:scale-105"
          />
        </div>
        <div className="px-2.5 pb-2 pt-3 relative">
          <p className="text-base md:text-lg font-bold group-hover:text-accent-foreground">{edition_number} Edición</p>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            {formattedDate}
            {' · '}
            {formattedDuration.hours}h {formattedDuration.minutes}min
          </p>
        </div>
      </div>
    </Link>
  )
}