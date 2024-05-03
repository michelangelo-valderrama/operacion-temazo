import type { Track } from '@/types/tracks'

export const tracks: Track[] = [
	{
		id: '20',
		name: 'Amanecer',
		artists_id: ['10'],
		duration_ms: 100000,
		edition_id: '123123',
		track_position: 1,
		track_number: 2,
		is_playing: true
	},
	{
		id: '21',
		name: 'Hotel California',
		artists_id: ['11'],
		duration_ms: 100000,
		edition_id: '123123',
		track_position: 3,
		track_number: 3,
		is_playing: false
	},
	{
		id: '22',
		name: 'Paint it black',
		artists_id: ['12'],
		duration_ms: 100000,
		edition_id: '123123',
		track_position: 2,
		track_number: 1,
		is_playing: false
	},
	{
		id: '23',
		name: 'Forever young',
		artists_id: ['13'],
		duration_ms: 100000,
		edition_id: '321321',
		track_position: 2,
		track_number: 1,
		is_playing: false
	},
	{
		id: '24',
		name: 'Sweet child o mine',
		artists_id: ['14'],
		duration_ms: 100000,
		edition_id: '321321',
		track_position: 1,
		track_number: 2,
		is_playing: false
	}
]
