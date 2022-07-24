import dynamic from 'next/dynamic';

export interface ChartProperty {
	label: string,
	time: number,
	color: string,
}

export const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
