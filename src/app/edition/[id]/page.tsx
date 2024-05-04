import type { Metadata } from 'next';
import { EditionIdPage } from '@/components/pages/edition-id.page';

export const metadata: Metadata = {
  title: 'Edición',
  description: 'Edición de Operación Triunfo',
}

interface Props {
  params: {
    id: string
  }
}

export default function Page(props: Props) {
  return <EditionIdPage {...props} />
}