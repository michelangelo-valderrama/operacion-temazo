import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

interface FormatDateToLocalProps {
	dateStr: string
	format?: Intl.DateTimeFormatOptions
	locale?: string
}

/**
 * Format a date string to a locale string
 * @param dateStr Date string
 * @param format Format options
 * @param locale Locale
 * @returns Formatted date string
 */
export function formatDateToLocal({
	dateStr,
	format = {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	},
	locale = 'es-ES'
}: FormatDateToLocalProps) {
	const date = new Date(dateStr)
	const options: Intl.DateTimeFormatOptions = format
	const formatter = new Intl.DateTimeFormat(locale, options)
	return formatter.format(date)
}

/**
 * Format a duration in milliseconds to a object with hours, minutes and seconds
 * @param duration Duration in milliseconds
 * @returns Object with hours, minutes and seconds
 */
export function formatDuration(duration: number) {
	const durationInSeconds = duration / 1000
	const hours = Math.floor(durationInSeconds / 3600)
	const minutes = Math.floor((durationInSeconds % 3600) / 60)
	const seconds = durationInSeconds % 60
	return { hours, minutes, seconds }
}

export function hexToHSL(hex: string): { h: number; s: number; l: number } {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

	if (!result) throw new Error('Could not parse Hex Color')

	const rHex = parseInt(result[1], 16)
	const gHex = parseInt(result[2], 16)
	const bHex = parseInt(result[3], 16)

	const r = rHex / 255
	const g = gHex / 255
	const b = bHex / 255

	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)

	let h = (max + min) / 2
	let s = h
	let l = h

	if (max === min) return { h: 0, s: 0, l }

	const d = max - min
	s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
	switch (max) {
		case r:
			h = (g - b) / d + (g < b ? 6 : 0)
			break
		case g:
			h = (b - r) / d + 2
			break
		case b:
			h = (r - g) / d + 4
			break
	}
	h /= 6

	s = s * 100
	s = Math.round(s)
	l = l * 100
	l = Math.round(l)
	h = Math.round(360 * h)

	return { h, s, l }
}

export const hexObjToString = ({
	h,
	s,
	l
}: {
	h: number
	s: number
	l: number
}) => `${h} ${s}% ${l}%`
