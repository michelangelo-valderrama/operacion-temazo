import { notFound } from 'next/navigation';
import { getEditionById } from "@/data/editions.data"
import { TrackItem } from '@/components/track-item';

interface Props {
  params: {
    id: string
  }
}

export function EditionIdPage({ params }: Props) {
  const edition = getEditionById(params.id) || notFound()
  const tracks = edition.tracks.items

  return (
    <div>
      <h1>Edition</h1>
      <h2>{edition.edition_number} Edición</h2>
      <p>{edition.release_date}</p>
      <p>{edition.video.duration_ms}</p>
      <p>{edition.video.yt_url}</p>
      <p>{edition.total_tracks}</p>
      <h3 className='mt-12'>Tracks</h3>

      <div>
        {tracks.sort((a, b) => a.track_number - b.track_number).map((track) => (
          <TrackItem key={track.id} {...track} edition_image={edition.images[0]} />
        ))}
      </div>
    </div>
  )
}