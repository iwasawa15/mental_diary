import { Diary, Status } from "../../types/diary"

export const getDiariesByMonth = (month: number): Diary[] => {
	return [2, 4, 5, 7, 9].map((i: number) => {
		const diary: Diary = {
			date: new Date(2021, 4, i),
			status: Status.happy
		} 
		return diary
	})
}