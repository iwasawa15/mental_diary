import { makeStyles } from '@material-ui/core';
import { FC, useState } from 'react';
import ReactCalendar, { CalendarTileProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%'
	},
	tile: {
		height: "50px",
		width: "40px"
	}
})

interface Props {
	contents: (props: CalendarTileProperties) => JSX.Element,
	date: Date | Date[],
	onChangeDate: (date: Date) => void
}

export const Calendar: FC<Props> = (props: Props) => {
	const classes = useStyles()
	return (
		<ReactCalendar
			onChange={(date: Date | Date[]) => {if(date instanceof Date)props.onChangeDate(date)}}
			value={props.date}
			className={classes.root}
			tileClassName={classes.tile}
			tileContent={props.contents}
		/>
	)
}
