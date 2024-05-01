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
 * Format a duration in seconds to a object with hours, minutes and seconds
 * @param duration Duration in seconds
 * @returns Object with hours, minutes and seconds
 */
export function formatDuration(duration: number) {
	const hours = Math.floor(duration / 3600)
	const minutes = Math.floor((duration % 3600) / 60)
	const seconds = duration % 60
	return { hours, minutes, seconds }
}
