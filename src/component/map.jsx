import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 

const Map = ({lat,long}) => {
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>",lat,long)
  const mapRef = useRef(null); // Reference to the map container

  useEffect(() => {
    // Initialize the map when the component mounts
    mapRef.current = L.map('map', {
      center: [lat, long], // Initial map center coordinates (London)
      zoom: 13, // Initial zoom level
    });

    // Add a tile layer (map tiles from OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '© OpenStreetMap contributors',
    }).addTo(mapRef.current);

    // Cleanup function to remove the map when the component unmounts
    return () => {
      mapRef.current.remove();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div id="map" style={{ height: '400px' }}></div> // The map container
};

export default Map;
