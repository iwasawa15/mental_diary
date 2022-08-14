import { userRef } from 'db/firebase/documents';
import { NextApiRequest, NextApiResponse } from 'next/types';

interface Diary {
	point: number;
	positiveComment: string;
	negativeComment: string;
}

export default function handler(req:NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		createDiary(req.body)
		res.status(201).json({});
  }
}

const createDiary = (params: { user: string, date: string, diary: Diary }) => {
	userRef.doc(params.user).collection('diaries').doc(params.date).set({
		...(params.diary)
	});
}