"use client"

import { Home, Heart, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TabItemProps {
  icon: React.ReactNode
  title: string
  href: string
}

function TabItem({ icon, title, href }: TabItemProps) {
  const pathname = usePathname()
  return (
    <Link href={href}>
      <button
        type="button"
        className={cn(`
          text-muted-foreground/80 hover:text-foreground/80
          flex flex-col items-center justify-center
          gap-y-1 size-20 transition text-xs font-medium
        `, {
          "text-accent-foreground/80 hover:text-accent-foreground": pathname === href,
        })}
      >
        {icon}
        {title}
      </button>
    </Link >
  )
}

export function Tabs() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 md:hidden">
      <aside className="bg-gradient-to-t from-background to-90% max-w-[100vw]">
        <div className={`
          flex items-center justify-evenly
          transition group hover:bg-background
        `}>
          <TabItem icon={<Home />} title="Inicio" href="/" />
          <TabItem icon={<Search />} title="Buscar" href="/search" />
          <TabItem icon={<Heart />} title="Favoritos" href="/favorites" />
          <TabItem icon={<User />} title="Perfíl" href="/profile/123" />
        </div>
      </aside>
    </div>
  )
}