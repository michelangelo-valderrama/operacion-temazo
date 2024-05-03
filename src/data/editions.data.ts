import { getTracksByEditionId } from '@/data/tracks.data'
import { editions } from '@/mocks/editions.mock'
import { tracks } from '@/mocks/tracks.mock'

export const getEditionById = (id: string) => {
	const edition = editions.find((e) => e.id === id)
	if (!edition) return null

	const items = tracks.filter((t) => t.edition_id === id)

	return {
		...edition,
		total_tracks: items.length,
		tracks: getTracksByEditionId(id)
	}
}
