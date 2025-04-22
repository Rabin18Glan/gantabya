import useMap from "@/components/[feature]/Map/hooks/useMap";
import { useAppSelector } from "@/store/hooks";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import { MapController } from "@maptiler/geocoding-control/types";
import * as maptilersdk from "@maptiler/sdk";
import { Map } from "@maptiler/sdk";
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
// import { MapController } from "@maptiler/geocoding-control/types";

interface IMapContextValue{
  mapController:MapController | undefined;
   
    mapContainer:React.MutableRefObject<HTMLDivElement | null>,

  
    map:React.MutableRefObject<Map | null>,
   
};
export const MapContext = createContext<IMapContextValue|null>(null);

export const MapProvider = ({ children,value }:{children:ReactNode,value:IMapContextValue}) => {

  return (
    <MapContext.Provider value={value}>{children}</MapContext.Provider>
  )
};

