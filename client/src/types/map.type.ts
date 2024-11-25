import { LatLng } from "leaflet";

export interface LatLngBounds {
    _northEast: LatLng;
    _southWest: LatLng;
  }
  
  export interface Address {
    country: string;
    country_code: string;
  }
  
 export interface Properties {
    address: Address;
    addresstype: string;
    boundingbox: number[];
    class: string;
    display_name: string;
    importance: number;
    lat: string;
    licence: string;
    lon: string;
    name: string;
    osm_id: number;
    osm_type: string;
    place_id: number;
    place_rank: number;
    type: string;
  }
  
 export interface LocationData {
    bbox: LatLngBounds;
    center: LatLng;
    html: string;
    icon: any; // Can be replaced with a specific type if known
    name: string;
    properties: Properties;
  }
  