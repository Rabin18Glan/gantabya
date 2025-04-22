
import { MapProvider } from '@/context/mapContext/mapContext';
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import "@maptiler/geocoding-control/style.css";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import useMap from './hooks/useMap';
import './map.css';
import MapSelector from './MapSelector';

export default function Map() {
  const {mapController,mapContainer,map,apiKey} = useMap();


  return (
   
     <MapProvider value={{map,mapContainer,mapController}}>
       <div className="h-full w-full">
       <div className='z-50 absolute top-28'>
       
       </div>
        <div className="z-50 fixed top-4 left-20">
          {/* Ensure mapController is set before rendering GeocodingControl */}
          {mapController && (
            <GeocodingControl showPlaceType="always" apiKey={apiKey} mapController={mapController} />
          )}
        </div>
        <div className='z-50 absolute right-2 bottom-[40vh]'><MapSelector /></div>
        <div ref={mapContainer} className="h-full w-full" >
          
       
        </div>
       
       
        

      </div>
     </MapProvider>

  );
}