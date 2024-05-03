import { PageColorStoreProvider } from '@/providers/page-color.provider'
import { HomePage } from '@/components/pages/home.page'
import { PageColor } from '@/components/page-color'

export default function Home() {
  return (
    <PageColorStoreProvider>
      <HomePage />
      <PageColor />
    </PageColorStoreProvider>
  )
}
