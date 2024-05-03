import { Nav } from "@/components/nav"
import { Content } from "@/components/content"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Nav />
      <Content>
        {children}
      </Content>
    </>
  )
}