
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ReactNode, useEffect, useRef, useState } from "react";
import useUserLocation from "../../../hooks/useUserLocation";
import osm from './utils/osmProvider';
import SearchLocation from './SearchLocation';
import RoutingComponent from './Routing';



type City={
  city:string;
  latitude:number;
  longitude:number;
  popup:string;
}
const markerIcon = new L.Icon({
  iconUrl:'bus.webp',
  iconSize:[30,30],
  iconAnchor:[17,30],
  popupAnchor:[3,-30]
});

const bikeMarker = new L.Icon({
  iconUrl:'bike.webp',
  iconSize:[30,30],
  iconAnchor:[17,30],
  popupAnchor:[3,-30]
})


const personMarker = new L.Icon({
  iconUrl:'person.webp',
  iconSize:[30,30],
  iconAnchor:[17,30],
  popupAnchor:[3,-30]
})
export default function BasicMap({children}:{children?:ReactNode})
{
const [cities,setCities] = useState<City[]>([]);
  const {latitude,longitude} = useUserLocation();
const [center,setCenter ] = useState<LatLngExpression>({lat:latitude?latitude:27.4256,lng:longitude?longitude:85.0322});
const mapRef= useRef();

useEffect(() => {
  // Fetch JSON data
  fetch('../cities.json')
    .then(response => response.json())
    .then(data => setCities(data))
    .catch(error => console.error('Error fetching cities data:', error));
}, []);

useEffect(()=>{
  if(latitude!=null&&longitude!=null)
    {
setCenter({lat:latitude,lng:longitude});
    }
},[latitude,longitude])

  return  <MapContainer zoomControl={false} ref={mapRef} center={center} zoom={10} className='w-full h-full z-0'>
<RoutingComponent />

<TileLayer  url={osm.maptiler.url} ></TileLayer>
<TileLayer  url={osm.stamenTerrainLines.url} ></TileLayer>
<TileLayer  url={osm.stamenTonerLabels.url}></TileLayer>

{cities.map(city=>{
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
<SearchLocation />
{children}
  </MapContainer>;
 
}