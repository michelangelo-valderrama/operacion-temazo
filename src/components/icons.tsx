import { Play as PlayIcon, Heart as HeartIcon, type LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

export function Play(props: LucideProps) {
  return <PlayIcon className={props.className} fill="currentColor" {...props} />
}

export function Heart(props: LucideProps) {
  return <HeartIcon className={props.className} {...props} />
}
