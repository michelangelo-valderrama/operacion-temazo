import { Nav } from "@/components/nav/nav"
import { Content } from "@/components/content"
import { Player } from "../player/player"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-svh flex flex-col">
      <div className="flex flex-1">
        <Nav />
        <Content>
          {children}
        </Content>
      </div>
      <Player />
    </div>
  )
}