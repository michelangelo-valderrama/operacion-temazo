import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HomeBannerProps extends React.HTMLAttributes<HTMLElement> { }

export function HomeBanner({ className }: HomeBannerProps) {
  return (
    <aside className={cn(
      `rounded-md max-w-screen-lg mx-auto shadow-2xl shadow-[hsl(var(--page-color))]/15`,
      className
    )}>
      <div className="rounded-md flex gap-x-6 items-end bg-gradient-to-br from-[hsl(var(--page-color))] to-50% to-black p-2.5">
        <div className={`size-52 rounded-md`}>
          <Image src="/song-image.png" alt="Image" width="207" height="206" className="object-cover size-full rounded-md" />
        </div>
        <div className="flex flex-col pb-2">
          <section className="mb-6 flex flex-col gap-y-1">
            <h2 className="uppercase font-bold *:block">
              <span className="text-2xl">Ganador</span>
              <span className="text-4xl">2ª edición 2024</span>
            </h2>
            <p className="text-foreground/80">
              Lorem ipsum · Dolor sit amet
            </p>
          </section>
          <div className="flex gap-x-4">
            <Button size="lg">Escuchar</Button>
            <Button size="lg" variant="outline">Ver clip</Button>
          </div>
        </div>
      </div>
    </aside>

  )
}