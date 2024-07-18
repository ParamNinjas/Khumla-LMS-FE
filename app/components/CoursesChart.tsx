// components/MyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const pluckLabels = (arr:any, key:string) => arr.map((i:any) => i[key]);

const MyCoursesChart = (props:any) => {
    console.log(props?.enrolled);
 
  const data = {
    labels: pluckLabels(props?.enrolled, 'title'),
    datasets: [
      {
        label: 'Enrolled Corses',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75,192,192,1)'
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MyCoursesChart;
