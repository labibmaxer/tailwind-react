import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ResultData = [
  { id: 1, name: "Student 1", physics: 85, chemistry: 78, math: 92 },
  { id: 2, name: "Student 2", physics: 72, chemistry: 88, math: 81 },
  { id: 3, name: "Student 3", physics: 90, chemistry: 95, math: 89 },
  { id: 4, name: "Student 4", physics: 64, chemistry: 70, math: 75 },
  { id: 5, name: "Student 5", physics: 93, chemistry: 85, math: 98 }
];

const ResultCharts = () => {
  return (
    <div className="p-4">
      <LineChart width={500} height={300} data={ResultData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey='math'></Line>
        <Line dataKey='chemistry'></Line>
      </LineChart>
    </div>
  );
};

export default ResultCharts;