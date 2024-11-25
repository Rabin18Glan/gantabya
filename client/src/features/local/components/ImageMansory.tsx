import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import useBreakPointDetector from '../../../hooks/useBreakPointDetector';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
    const {isMd,isSm,isLg,isXl} = useBreakPointDetector();
const [hoveredItem,setHoveredItem] = React.useState<string>();
  return (
    <div className='h-auto overflow-y-auto '>
      <Masonry className=''  columns={isSm?isMd?isLg?isXl?6:5:4:3:2} spacing={2}>
        {itemData.map((item, index) => (
          <div onMouseOver={()=>setHoveredItem(item.title)}
          onMouseOut={()=>setHoveredItem(undefined)}
          className='bg-transparent relative' key={index}>
          
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              className=' block rounded-3xl  hover:opacity-90 '
            
            />

          {hoveredItem==item.title&&<>
          <div className='absolute top-0 px-5'>            <h1 className='text-3xl text-shadow-lg text-white '>
          {item.title}</h1></div>
          <div className='absolute bottom-0 p-5 w-full flex justify-between'>
<button className='bg-white text-gray-700 px-5 rounded-lg hover:bg-orange-500 hover:text-white py-2'>More</button>
            <button className='bg-white text-gray-700 px-5 rounded-lg hover:bg-orange-500 hover:text-white'>Visit</button></div></>}  
          </div>
        ))}
      </Masonry>
    </div>
  );
}

const itemData = [
    {
img:'pokh.jpeg',
title:'Pokhara'
    },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
  
];
