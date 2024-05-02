import Image from "next/image"
import { formatDateToLocal, formatDuration } from "@/lib/utils"
import { PlayButton } from "@/components/play-button"
import Link from "next/link"

interface EditionItemProps {
  id: string
  edition: string
  date: string
  duration: number
}

export function EditionItem({ date, duration, edition, id }: EditionItemProps) {
  const formattedDate = formatDateToLocal({
    dateStr: date, format: {
      day: 'numeric',
      month: 'short',
    }
  })
  const formattedDuration = formatDuration(duration)

  return (
    <Link href={`/collection/${id}`}>
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
          <p className="text-base md:text-lg font-bold group-hover:text-accent-foreground">{edition} Edición</p>
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