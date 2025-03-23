import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

const HeatMapComponent: React.FC = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('heatmap').setView([37.784, -122.401], 14); // Moscone Center coordinates

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Heatmap data (example: high-traffic areas or evacuation routes)
    const heatmapData: L.LatLngTuple[] = [
      [37.784, -122.401], // [lat, lng]
      [37.783, -122.403],
      [37.782, -122.405],
    ];

    // Create the heatmap layer
    L.heatLayer(heatmapData, {
      radius: 25, // Adjust the radius of the heatmap points
      blur: 15,   // Adjust the blur effect
      maxZoom: 17,
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="heatmap" className="h-[500px] w-full rounded-lg overflow-hidden"></div>;
};

export default HeatMapComponent;