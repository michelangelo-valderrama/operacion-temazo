import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function PlayButton({ className, ...props }: PlayButtonProps) {
  return (
    <button
      type="button"
      className={cn('transition size-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full', className)}
      {...props}
    >
      <Play className="size-6 fill-inherit" />
      <span className="sr-only">Reproducir</span>
    </button>
  )
}