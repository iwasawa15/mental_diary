import { GetStaticPaths, GetStaticProps, NextComponentType, NextPageContext } from "next";
import { getUser } from "../../lib/user/get";
import { User } from "../../types/user";
import Error from 'next/error'
import React, { useState, useEffect, useMemo } from 'react';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps } from '@material-ui/core/TextField';
import { useRouter } from "next/dist/client/router";
import { Calendar } from "../../components/Calendar";
import { CalendarTileProperties } from "react-calendar"

import { Paper, Grid, Container } from "@material-ui/core"
import { getDiariesByMonth } from "../../lib/diaries/get";
import { Diary, Status } from "../../types/diary";
import { faceIcon } from "../../utils/face_icon";
import { Emoji } from "emoji-mart";
import { 
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Line,
	LineChart,
	Legend
} from 'recharts';

interface Props {
	statusCode: number
	user?: User
}

const UserPage: NextComponentType<NextPageContext, {}, Props> = ({statusCode, user}: Props) => {
	const [date, onChangeDate] = useState<Date>(new Date());
	const [diaries, setDiaries] = useState<Diary[]>([])
	const diary: Diary | undefined = useMemo(() => diaries.find((d: Diary) => {return d.date.toString() === date.toString()}), [diaries, date])
	const router = useRouter()
	if (statusCode > 400) {
		return <Error statusCode={statusCode} />
	}

	useEffect(() => {
		const diaries = getDiariesByMonth(date.getMonth())
		setDiaries(diaries)
	}, [date.getMonth()])

	const getContent = ({_, date, view}: CalendarTileProperties): JSX.Element => {
		const status: Status | undefined = diaries.find((d: Diary) => {return d.date.toString() === date.toString()})?.status
		const content: string = status !== undefined ? faceIcon(status) : ""
		return (
			<div>
				<Emoji emoji={content} size={20} />
			</div>
		)
	}
	
	const data = [{x: 5, y: 0}]

	const data2 = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

  return (
		<Container style={{padding: "8px"}}>
			<h1>My Page</h1>
			<ScatterChart
				width={400}
				height={100}
				margin={{
					top: 20,
					right: 20,
					bottom: 20,
					left: 20,
				}}
			>
				<XAxis type="number" dataKey="x" name="stature" unit="" />
				<YAxis type="number" dataKey="y" name="weight" unit="" />
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
				<Scatter name="A school" data={data} fill="#8884d8" />
			</ScatterChart>
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<Container style={{padding: "4px"}}>
						<Calendar 
							contents={getContent}
							date={date}
							onChangeDate={onChangeDate}
						/>
					</Container>
				</Grid>
				<Grid item xs={6}>
					<LineChart
						width={500}
						height={300}
						data={data2}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
					</LineChart>
					<Paper style={{padding: "4px"}}>
						<h2>{date.getMonth() + 1} / {date.getDate()}の調子</h2><Emoji emoji={diary ? faceIcon(diary.status) : ""} size={32} />
						<h3>commnet</h3>
						<div>{diary?.comment}</div>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = ['1','2'].map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		}
	})
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (params == null) {
		return {
			props: {
				statusCode: 404
			}
		}
	}

	const user: User = getUser(Number(params.id))
	const statusCode: number = 200
	return {
		props: {
			statusCode,
			user
		}
	}
}

export default UserPage