"use client"

import { Home, Search, Heart, Settings } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { users } from "@/mocks/users.mock"

interface SidebarButtonProps {
  title: string
  icon: React.ReactNode
  href: string
}

export function SidebarButton({ title, icon, href }: SidebarButtonProps) {
  const pathname = usePathname()
  return (
    <Link href={href}>
      <Button variant="nav" className={cn("h-12 px-6", {
        "bg-accent/80 text-accent-foreground hover:bg-accent": pathname === href,
      })}>
        {icon}
        <span className="font-bold text-base">{title}</span>
      </Button>
    </Link>
  )
}

interface SidebarUserButtonProps {
  href: string
}

export function SidebarUserButton({ href }: SidebarUserButtonProps) {
  const pathname = usePathname()
  const user = users[0]

  return (
    <Link href={href}>
      <Button variant="nav" className={cn("h-[4.5rem] px-6 border-b", {
        "bg-accent/80 text-accent-foreground hover:bg-accent": pathname === href,
      })}>
        <Avatar className="size-8">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.username}</AvatarFallback>
        </Avatar>
        <span className="font-bold text-base flex-1 text-left truncate">{user.username}</span>
        <Settings className="size-5" />
      </Button>
    </Link>
  )
}

export function Sidebar() {
  return (
    <aside className="bg-background min-w-72 w-72 border-r hidden sm:block">
      <div className="mb-12">
        <SidebarUserButton href="/profile/123" />
      </div>
      <nav>
        <ul>
          <li>
            <SidebarButton href="/" title="Inicio" icon={<Home className="size-5" />} />
          </li>
          <li>
            <SidebarButton href="/search" title="Buscar" icon={<Search className="size-5" />} />
          </li>
          <li>
            <SidebarButton href="/favorites" title="Favoritos" icon={<Heart className="size-5" />} />
          </li>
        </ul>
      </nav>
    </aside>
  )
}