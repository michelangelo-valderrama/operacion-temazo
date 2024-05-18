import { Duration } from '@/types/duration'
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
 * Round a number to a specific number of decimals
 * @param value Number to round
 * @param decimals Number of decimals
 * @returns Rounded number
 */
export function round(value: number, decimals = 0) {
	return Math.round(value * 10 ** decimals) / 10 ** decimals
}

/**
 * Format a duration in milliseconds to a object with hours, minutes and seconds
 * @param duration Duration in milliseconds
 * @returns Object with hours, minutes and seconds
 */
export function formatDuration(duration: number): Duration {
	const durationInSeconds = duration / 1000
	const hours = Math.floor(durationInSeconds / 3600)
	const minutes = Math.floor((durationInSeconds % 3600) / 60)
	const seconds = round(durationInSeconds % 60)
	return { hours, minutes, seconds }
}

export function formatDurationToString(duration: Duration) {
	const { hours, minutes, seconds } = duration
	const hoursStr = hours > 0 ? `${hours}:` : ''
	const minutesStr = `${hours > 0 && minutes < 10 ? `0${minutes}` : minutes}:`
	const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`
	return `${hoursStr}${minutesStr}${secondsStr}`
}
