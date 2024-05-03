export interface Edition {
	id: string
	edition_number: string
	release_date: string
	images: {
		url: string
		width: number
		height: number
	}[]
	color_hsl: string
	video: {
		yt_url: string
		duration_ms: number
	}
}
