import { Heart, Play } from "@/components/icons";

export function PlayerMobile() {
  return (
    <aside className="absolute bottom-20 left-0 w-full flex md:hidden p-2">
      <div className="rounded-md bg-muted/60 flex-1 p-2 flex items-center">
        <div className="flex items-center gap-x-3 flex-1">
          <div className="size-11 bg-muted rounded-md"></div>
          <div className="text-sm">
            <p className="font-medium">El retumbar</p>
            <p className="text-muted-foreground">Socorrox Loninyo</p>
          </div>
        </div>
        <div className="pr-2 flex items-center gap-x-4 *:size-6">
          <Heart className="text-muted-foreground" />
          <Play />
        </div>
      </div>
    </aside>
  )
}