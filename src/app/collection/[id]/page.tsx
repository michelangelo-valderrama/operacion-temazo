import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { editions } from "@/mocks/editions.mock"

export const metadata: Metadata = {
  title: '404 - Página no encontrada',
};

interface PageProps {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProps) {
  const edition = editions.find(e => e.id === params.id)
  if (!edition) notFound()

  return (
    <div>
      <h1>Collection</h1>
      <h2>{edition?.edition} Edición</h2>
    </div>
  )
}