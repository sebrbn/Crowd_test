import React, { Suspense } from 'react';
import { CrowdDensityChart } from '@/components/CrowdDensityChart';

// Dynamically import the MapComponent using React.lazy
const MapComponent = React.lazy(() => import('@/components/MapComponent'));

const MapPage = () => {
  const roomId = "room1"; // Replace with the actual room ID or fetch it dynamically

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Map View</h1>

      {/* Render the map with Suspense for lazy loading */}
      <Suspense fallback={<div>Loading map...</div>}>
        <div className="mb-8">
          <MapComponent />
        </div>
      </Suspense>

      {/* Render the crowd density chart */}
      <div className="mt-8">
        <CrowdDensityChart roomId={roomId} /> {/* Pass roomId here */}
      </div>
    </div>
  );
};

export default MapPage;