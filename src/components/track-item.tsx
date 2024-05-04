import { Heart, Play } from "@/components/icons"
import { TrackWithArtists } from "@/types/tracks"
import { cn, formatDuration } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import Image from "next/image"

type TrackIconButtonProps = ButtonProps

function TrackIconButton({ className, children, ...props }: TrackIconButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("group/button text-muted-foreground hover:text-accent-foreground hover:bg-transparent", className)} {...props}
    >
      {children}
    </Button>
  )
}

type TrackItemProps = TrackWithArtists & {
  edition_image: {
    url: string
    width: number
    height: number
  }
}

export function TrackItem({ name, artists, track_number, duration_ms, is_playing, edition_image }: TrackItemProps) {
  const formattedDuration = formatDuration(duration_ms)
  const trackDuration = `${formattedDuration.minutes}:${`${formattedDuration.seconds}`.padStart(2, '0')}`

  return (
    <article className="transition flex gap-x-3 items-center py-1.5 px-6 hover:bg-muted/40 rounded-md group">
      <TrackIconButton>
        <Play className="size-4 hidden group-hover:inline-block group-hover/button:scale-105 transition" />
        <span className="group-hover:hidden text-muted-foreground font-medium">
          {track_number}
        </span>
      </TrackIconButton>
      <div className="size-10 rounded-sm">
        <Image src={edition_image.url} alt={`Edition cover of ${name}`} width={edition_image.width} height={edition_image.height}></Image>
      </div>
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground truncate">{artists.map(a => a.name).join(', ')}</p>
      </div>
      <TrackIconButton>
        <Heart className="size-4 hidden group-hover:inline-block group-hover/button:scale-105 transition" />
      </TrackIconButton>
      <span className="text-sm text-muted-foreground w-10 text-right">
        <time>{trackDuration}</time>
      </span>
    </article>
  )
}