import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"

import { useMapContext } from '@/context/mapContext/useMapContext'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setMapStyle } from '@/store/slices/mapSlice'
import { ReferenceMapStyle } from '@maptiler/sdk'
import { MAPSTYLES } from './mapStyles'
import { IMapStyles } from '@/types/map.type'




function MapSelector() {
    const {map} = useMapContext();
      
const dispatch = useAppDispatch();

const currentSelectedMapImage  = useAppSelector(state=>state.map.currentMapStyle.image);
  const handleSelectMap = (style:IMapStyles)=>{
   return ()=>{
    map.current?.setStyle(style.default);
    
    dispatch(setMapStyle({ currentMapStyle:style}));
}
  }

    return (
    <Drawer >
    <DrawerTrigger className="z-50">
       <img src={currentSelectedMapImage} className='w-14 h-14 rounded-lg shadow-lg border border-accent'></img>
       </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Choose your Map</DrawerTitle>
        <div className="flex gap-5 mt-2 overflow-x-auto">
  {MAPSTYLES.map((mapStyle, index) => (
    <div
      key={index}
      className="flex flex-col justify-center items-center"
    >
      {/* Image Container */}
      <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={mapStyle.image}
          alt={mapStyle.name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleSelectMap(mapStyle)}
        />
      </div>
      {/* Name Text */}
      <h1 className="mt-2 text-sm font-medium text-center text-gray-700">
        {mapStyle.name}
      </h1>
    </div>
  ))}
</div>

      </DrawerHeader>
     
     
      <DrawerFooter>
      
        <DrawerClose>
          <Button variant="outline">Okay</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  )
}

export default MapSelector