import { BikeScooter, BusAlert, CarCrash, CarRentalOutlined, Explore, Fullscreen, Home, HomeMaxOutlined, Hotel, LocationCityOutlined, LocationOn, Place, PlaceTwoTone, TravelExplore } from '@mui/icons-material';
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Navigation{
  name:string
    title:string;
    icon:any;

}

function NavigationBar({className}:{className?:string}) {

  const [active, setActive] = useState<string>('local');

const navigate = useNavigate();
    const navigations:Navigation[] = [
        {
          name:'local',
title:'Local Travel',
icon:<BusAlert className=''/>,


        },
        {
          name:'global',
          title:'Global',
          icon:<TravelExplore  />

        },
        {
          name:'hotel',
          title:'Hotels',
          icon:<Hotel />

        },
     
        {title:'Location',
          name:'location',
          icon:<PlaceTwoTone />
        },

       

    ]
  return (
 <div className={` fixed bottom-0 rounded-t-xl flex  shadow-xl md:shadow-none shadow-gray-400 items-center  bg-white w-[100vw] h-[7vh] md:h-12 dark:bg-gray-700 ${className}`} >
{navigations.map(navigation=>{
return <div className='flex justify-center items-center w-[25%] md:w-[20%]'><div onClick={()=>{navigate(`./${navigation.name}`);
  setActive(navigation.name)
}} className={`${active==navigation.name?'text-orange-500 md:animate-none md:border-none md:translate-y-0 ease-in duration-200 bg-white  shadow-inner md:shadow-none shadow-orange-200  translate-y-[-30px] border-[15px] dark:border-black border-transparent md:border-b-2 md:border-green-400':'text-gray-700 dark:text-gray-200'} p-3 rounded-full w-20  text-center  md:mt-0`}>{navigation.icon}</div> </div>
})}

<div className="relative">
      <div className="h-40 bg-blue-500 relative z-10">
        {/* Content of your component */}
      </div>
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden z-0">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full"
        >
          <path
            d="M0,0 L500,0 C500,0 500,150 250,150 C0,150 0,0 0,0 Z"
            className="text-blue-500 fill-current"
          />
        </svg>
      </div>
    </div>
    </div>
  )
}

export default NavigationBar