import { Artist } from './artists'

export interface Track {
	id: string
	edition_id: string
	track_number: number
	name: string
	duration_ms: number
	track_position: number
	artists_id: string[]
	is_playing: boolean
	audio: string
}

export interface TrackWithArtists extends Track {
	artists: Artist[]
}
