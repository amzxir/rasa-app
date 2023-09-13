import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );


const labels = ['فروردین', 'اردیبهشت', 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' , 'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفنند'];

export const options = {
    plugins: {
        legend: {
          display: false
        }
    }
}

export const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map(() => [0 , 12]),
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: '',
        data: labels.map(() => [0 , 6]),
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      },
      {
        label: '',
        data: labels.map(() => [0 , 1]),
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 1',
      },
    ],
  };

export default function Line() {
  return (
    <Bar options={options} data={data} />
  )
}

