"use client"

import { useEffect, useState } from "react"
import { cn, formatDurationToString, formatDuration } from "@/lib/utils"
// import { audio } from "@/scripts/player"
import { MicVocal, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { PlayerSlider } from "./player-slider"
import Link from "next/link"

interface PlayerOptionsButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function PlayerOptionsButton({ children, className }: PlayerOptionsButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("hover:bg-transparent *:size-5", className)}
    >
      {children}
    </Button>
  )
}

interface AudioTimeProps extends React.HTMLAttributes<HTMLSpanElement> {
  time: number | undefined
}

function AudioTime({ time, ...props }: AudioTimeProps) {
  let content = '-:--'

  if (time != null) {
    const timeFormatted = formatDuration(time)
    content = formatDurationToString(timeFormatted)
  }

  return <span {...props}>{content}</span>
}

export function PlayerDesktop() {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState([80])
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    progressBar: [0],
  })

  /* audio.addEventListener("loadeddata", () => {
    setSongInfo({
      ...songInfo,
      currentTime: 0,
      duration: audio.duration * 1000,
    })
  })

  audio.addEventListener("ended", () => {
    setPlaying(false)
  })

  audio.addEventListener("timeupdate", () => {
    const percentage = (audio.currentTime / audio.duration) * 100

    const currentTime = audio.currentTime * 1000
    const curation = audio.duration * 1000
    const progressBar = [percentage]

    setSongInfo({
      currentTime,
      duration: curation,
      progressBar,
    })
  })

  useEffect(() => {
    audio.volume = volume[0] / 100
  }, [volume])

  useEffect(() => {
    if (playing) audio.play()
    else audio.pause()
  }, [playing]) */

  const handleValueChangePercentage = (e: number[]) => {
    // setSongInfo({
    //   ...songInfo,
    //   progressBar: e,
    // })
    // audio.currentTime = (e[0] * audio.duration) / 100
  }

  const handleValueChangeVolume = (e: number[]) => {
    setVolume(e)
  }

  /* navigator.mediaSession.setActionHandler('play', () => {
    setPlaying(true)
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    setPlaying(false)
  }); */

  return (
    <aside className="hidden border-t py-2 px-4 md:flex gap-x-4">
      <div className="flex items-center gap-x-3">
        <div className="size-14 lg:size-16 bg-muted/60 rounded-md"></div>
        <div className="truncate">
          <p className="font-medium">Retumbar</p>
          <p className="text-sm text-muted-foreground">Socorrox Loninyo</p>
        </div>
      </div>
      <div className="flex-1 flex items-start justify-center text-muted-foreground">
        <div className="min-w-[275px] max-w-[550px] w-full flex flex-col items-center gap-y-2">
          <div className="flex items-center justify-center">
            <PlayerOptionsButton>
              <Shuffle />
            </PlayerOptionsButton>
            <PlayerOptionsButton>
              <SkipBack />
            </PlayerOptionsButton>
            <Button
              size="icon"
              onClick={() => setPlaying(!playing)}
              className={`
                transition
                hover:scale-105
                rounded-full size-8 mx-2
                flex items-center justify-center
                bg-primary text-primary-foreground
              `}
            >
              <Play playing={playing} className="size-4 fill-inherit" />
              <span className="sr-only">Reproducir</span>
            </Button>
            <PlayerOptionsButton>
              <SkipForward />
            </PlayerOptionsButton>
            <PlayerOptionsButton>
              <Repeat />
            </PlayerOptionsButton>
          </div>
          <div className="w-full relative text-xs">
            <AudioTime className="absolute left-0 -top-6" time={songInfo.currentTime} />
            <PlayerSlider value={songInfo.progressBar} onValueChange={handleValueChangePercentage} />
            <AudioTime className="absolute right-0 -top-6" time={songInfo.duration} />
          </div>
        </div>
      </div>
      <div className="text-muted-foreground flex items-center justify-end gap-x-2">
        <Link href="/lyrics">
          <PlayerOptionsButton className="*:size-4">
            <MicVocal />
          </PlayerOptionsButton>
        </Link>
        <div className="flex items-center justify-end gap-x-2.5 flex-1">
          <div>
            <Volume className="size-4" level={2} />
          </div>
          <PlayerSlider className="w-12 lg:w-20" value={volume} onValueChange={handleValueChangeVolume} />
        </div>
      </div>
    </aside>
  )
}
