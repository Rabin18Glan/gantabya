import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ReactNode, useRef, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import useUserLocation from "../../../hooks/useUserLocation";
import RoutingComponent from './Routing';
import SearchLocation from './SearchLocation';
import osm from './utils/osmProvider';

export default function MyMap({ children }: { children?: ReactNode }) {
  const { latitude, longitude } = useUserLocation();
  const [center] = useState({
    lat: latitude ? latitude : 27.4256,
    lng: longitude ? longitude : 85.0322,
  });

  // Explicitly type the ref to match the Leaflet Map instance.
  const mapRef = useRef<Map | null>(null);

  return (
    <MapContainer
      zoomControl={false}
      ref={mapRef}
      center={center}
      zoom={10}
      className="w-full h-full z-0"
    >
      <RoutingComponent />
      <TileLayer
        url={osm.maptiler.url}
        attribution={osm.maptiler.attribution}
      />
      {/* <TileLayer
        url={osm.openstreet.url}
        attribution={osm.openstreet.attribution}
      /> */}
      <SearchLocation />
      {children}
    </MapContainer>
  );
}


{/* //  <TileLayer  url={osm.maptiler.url} ></TileLayer>
// <TileLayer  url={osm.stamenTerrainLines.url} ></TileLayer>
// <TileLayer  url={osm.stamenTonerLabels.url}></TileLayer> */}

{/* {cities.map(city=>{
  return <Marker position={[city.latitude,city.longitude]} icon={markerIcon}>
    <Popup><b>{city.city} Bus</b></Popup>
  </Marker>
})}
<Marker  position={[27.4256,85.0322]} icon={markerIcon}>
  <Popup><b>hi</b></Popup>
</Marker>
<Marker  position={[24.4256,80.0322]} icon={bikeMarker}>
  <Popup><b>hi</b></Popup>
</Marker>

<Marker  position={[latitude?latitude:27.4256,longitude?longitude:85.0322]} icon={personMarker}>
  <Popup><b>You are here</b></Popup>
</Marker>

 */}