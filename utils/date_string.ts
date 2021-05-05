export const date2string = (date: Date): string[] => {
	const dateStrings = date.toDateString().split(" ")
	return dateStrings.slice(1)
}