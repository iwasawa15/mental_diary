export interface Diary {
	date: Date
	status: Status
	comment?: string
}

export enum Status {
	happy,
	good,
	soso,
	sad,
	tired,
	exhausted,
	worst
}