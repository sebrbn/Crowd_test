import React from 'react';
import { CrowdDensityChart } from '@/components/CrowdDensityChart';

const CrowdDensity = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Room Crowd Density</h1>
      <CrowdDensityChart roomId="room1" />
    </div>
  );
};

export default CrowdDensity;