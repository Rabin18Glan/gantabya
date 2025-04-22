import { useAppSelector } from "@/store/hooks";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import * as maptilersdk from "@maptiler/sdk";
import React, { useEffect, useRef, useState } from "react";
import L, { Map } from 'leaflet';
import { Marker } from "../Marker";
function useMap() {
  const currentMapStyle = useAppSelector(state=>state.map.currentMapStyle);
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const map = useRef<maptilersdk.Map | null>(null);


  const zoom = 14;
  const [mapController, setMapController] = useState<ReturnType<typeof createMapLibreGlMapController> | undefined>(undefined);
 
  // Configure MapTiler API key
  maptilersdk.config.apiKey = "GSrqdzQBfDCIqwUSbqYD";

  useEffect(() => {
//  maptilersdk.a



  
    navigator.geolocation.getCurrentPosition((position) => {
      if (map.current || !mapContainer.current) return; // Prevent multiple initializations
      const { longitude, latitude } = position.coords;

      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: currentMapStyle.default,
        center: [longitude, latitude],
        zoom: zoom,
        apiKey: maptilersdk.config.apiKey,
        pitch: 60, // Initial pitch (tilt)
        renderWorldCopies: false, // Render map infinitely
        navigationControl: "bottom-right",
        interactive: true, // Enable/disable interaction
        forceNoAttributionControl: true, // Show/hide attribution
        fullscreenControl: "bottom-right", // Add fullscreen control
        keyboard: true, // Enable keyboard navigation
        scrollZoom: true, // Enable scroll wheel zoom
        boxZoom: true, // Enable box zoom
        touchZoomRotate: true, // Enable touch gestures
        doubleClickZoom: true, // Enable double-click zoom
        dragPan: true, // Enable dragging
        dragRotate: true, // Enable rotation with dragging
        crossSourceCollisions: true, // Collisions between symbol layers
        fadeDuration: 300, // Transition duration for changes
        terrain: true,
        terrainExaggeration:1.5,
        hash: true,
        terrainControl: "bottom-right",
        geolocate: "COUNTRY",
        geolocateControl: 'bottom-right',
        locale: true,
      
       
        minimap: {
          
          containerStyle: {
            margin: '0px 0px 70px 16px',
            width: '100px',   // Set the width of the minimap container
            height: '100px',  // Set the height of the minimap container
            borderRadius: '30px',  // Rounded corners for the minimap
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)', // Optional shadow for better visibility
          },
          style: maptilersdk.MapStyle.SATELLITE,
        },
        collectResourceTiming: true,
        pitchWithRotate: true,
      
        antialias: true,
        maxTileCacheSize: 500, // Stores up to 500 tiles.
        maxTileCacheZoomLevels: 5, // Caches up to 5 zoom levels.
        pixelRatio: window.devicePixelRatio, // Matches the device's pixel density.
        refreshExpiredTiles: true,
        scaleControl: "bottom-right", // Adds the scale bar at the bottom-left.

        // terrainExaggeration: 1.5, // Exaggerates elevation by 1.5x.
        trackResize: true,

        bearingSnap: 10,
        clickTolerance: 5,
        // failIfMajorPerformanceCaveat: true,
        localIdeographFontFamily: "Arial Unicode MS",
      });

      const marker = new maptilersdk.Marker({element:Marker})
      .setLngLat([longitude, latitude])
      .addTo(map.current)

    map.current.addLayer
      // Set the map controller
      setMapController(createMapLibreGlMapController(map.current, maptilersdk));
    });


    return () => {
      // Clean up event listeners and map instance
      if (map.current) {

        map.current.remove();
        map.current = null;
        console.log("map removed");
      
      }
      Marker.remove();
    };



  }, []);

  useEffect(() => {
    // Debugging: log to ensure mapController is set
    if (mapController) {
      console.log("Map Controller initialized:", mapController);
    }
  }, [mapController]);

  return {
    maptilersdk,
    mapController,
    apiKey: maptilersdk.config.apiKey,
    mapContainer,

  
    map
  };
}

export default useMap;
