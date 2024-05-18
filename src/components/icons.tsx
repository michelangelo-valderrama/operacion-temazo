import {
  PlayIcon,
  PauseIcon,
  HeartIcon,
  SkipForwardIcon,
  SkipBackIcon,
  ShuffleIcon,
  Repeat2Icon,
  MicVocalIcon,
  VolumeXIcon,
  Volume1Icon,
  Volume2Icon,
  type LucideProps
} from "lucide-react"
import { cn } from "@/lib/utils"

interface PlayProps extends LucideProps {
  playing?: boolean
}

export function Play({ playing, ...props }: PlayProps) {
  let Icon = PlayIcon
  if (playing) Icon = PauseIcon
  return <Icon className={props.className} fill="currentColor" {...props} />
}

export function Heart(props: LucideProps) {
  return <HeartIcon className={props.className} {...props} />
}

export function SkipForward(props: LucideProps) {
  return <SkipForwardIcon className={props.className} fill="currentColor" {...props} />
}

export function SkipBack(props: LucideProps) {
  return <SkipBackIcon className={props.className} fill="currentColor" {...props} />
}

export function Shuffle(props: LucideProps) {
  return <ShuffleIcon className={props.className} {...props} />
}

export function Repeat(props: LucideProps) {
  return <Repeat2Icon className={props.className} {...props} />
}

export function MicVocal(props: LucideProps) {
  return <MicVocalIcon className={props.className} {...props} />
}

interface VolumeProps extends LucideProps {
  level?: 0 | 1 | 2
}

export function Volume({ level, ...props }: VolumeProps) {
  let Icon = VolumeXIcon
  if (level === 1) Icon = Volume1Icon
  if (level === 2) Icon = Volume2Icon

  return <Icon className={props.className} {...props} />
}
