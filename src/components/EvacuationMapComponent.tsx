import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const EvacuationMapComponent: React.FC = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('evacuation-map').setView([37.784, -122.401], 14); // Moscone Center coordinates

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define evacuation routes for Moscone Center, San Francisco
    const mosconeRoutes = [
      {
        name: 'Moscone Center - Primary Route',
        coordinates: [
          [37.784, -122.401] as L.LatLngExpression, // Moscone Center
          [37.783, -122.403] as L.LatLngExpression, // Howard Street
          [37.782, -122.405] as L.LatLngExpression, // 4th Street
          [37.781, -122.407] as L.LatLngExpression, // Mission Street
        ],
        color: 'red',
      },
      {
        name: 'Moscone Center - Alternative Route',
        coordinates: [
          [37.784, -122.401] as L.LatLngExpression, // Moscone Center
          [37.785, -122.399] as L.LatLngExpression, // 3rd Street
          [37.786, -122.397] as L.LatLngExpression, // Folsom Street
        ],
        color: 'blue',
      },
    ];

    // Define evacuation routes for Central Park, New York
    const centralParkRoutes = [
      {
        name: 'Central Park - Primary Route',
        coordinates: [
          [40.785, -73.968] as L.LatLngExpression, // Central Park (South Entrance)
          [40.783, -73.966] as L.LatLngExpression, // 7th Avenue
          [40.781, -73.964] as L.LatLngExpression, // Columbus Circle
        ],
        color: 'green',
      },
      {
        name: 'Central Park - Alternative Route',
        coordinates: [
          [40.785, -73.968] as L.LatLngExpression, // Central Park (South Entrance)
          [40.787, -73.97] as L.LatLngExpression, // 5th Avenue
          [40.789, -73.972] as L.LatLngExpression, // East Side
        ],
        color: 'orange',
      },
    ];

    // Add polylines for Moscone Center routes
    mosconeRoutes.forEach((route) => {
      L.polyline(route.coordinates, {
        color: route.color,
        weight: 3,
        opacity: 0.7,
      })
        .addTo(map)
        .bindPopup(route.name); // Add a popup with the route name
    });

    // Add polylines for Central Park routes
    centralParkRoutes.forEach((route) => {
      L.polyline(route.coordinates, {
        color: route.color,
        weight: 3,
        opacity: 0.7,
      })
        .addTo(map)
        .bindPopup(route.name); // Add a popup with the route name
    });

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="evacuation-map" className="h-[500px] w-full rounded-lg overflow-hidden"></div>;
};

export default EvacuationMapComponent;