import { MicVocal, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

export function PlayerDesktop() {
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
              className={`
                transition
                hover:scale-105
                rounded-full size-8 mx-2
                flex items-center justify-center
                bg-primary text-primary-foreground
              `}
            >
              <Play className="size-4 fill-inherit" />
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
            <span className="absolute left-0 -top-6">0:00</span>
            <div className="w-full h-1 bg-muted rounded-full">
              <div className="h-full w-1/2 bg-primary rounded-l-full"></div>
            </div>
            <span className="absolute right-0 -top-6">0:00</span>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground flex items-center justify-end gap-x-2">
        <PlayerOptionsButton className="*:size-4">
          <MicVocal />
        </PlayerOptionsButton>
        <div className="flex items-center justify-end gap-x-2.5 flex-1">
          <div>
            <Volume className="size-4" level={2} />
          </div>
          <div className="w-12 lg:w-20 h-1 bg-muted rounded-full">
            <div className="h-full w-1/2 bg-primary rounded-l-full"></div>
          </div>
        </div>
      </div>
    </aside>
  )
}
