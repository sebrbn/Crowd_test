import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useCrowdData } from '@/hooks/useCrowdData';

interface CrowdDensityChartProps {
  roomId: string;
}

export const CrowdDensityChart: React.FC<CrowdDensityChartProps> = ({ roomId }) => {
  const { data, loading } = useCrowdData(roomId);

  if (loading) return <div>Loading crowd density data...</div>;

  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};