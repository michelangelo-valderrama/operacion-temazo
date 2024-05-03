import { tracks } from '@/mocks/tracks.mock'
import { artists } from '@/mocks/artists.mock'

export const getTracksByEditionId = (id: string) => {
	const items = tracks
		.filter((t) => t.edition_id === id)
		.map((t) => {
			return {
				...t,
				artists: artists.filter((a) => t.artists_id.includes(a.id))
			}
		})

	return {
		items,
		total: items.length
	}
}
