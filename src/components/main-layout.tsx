import { PageColorStoreProvider } from "@/providers/page-color.provider"
import { Nav } from "@/components/nav"
import { Content } from "@/components/content"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Nav />
      <PageColorStoreProvider>
        <Content>
          {children}
        </Content>
      </PageColorStoreProvider>
    </>
  )
}