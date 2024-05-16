import { Image, KeyboardDoubleArrowDownRounded } from '@mui/icons-material'
import { Box, Button, Container, IconButton, List, Rating, Stack, Tabs, Typography } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import PostDetails from './PostDetails';
import { deepOrange } from '@mui/material/colors';


interface Post {
  placeName: string,
  photos: Array<string>,
  postName: string,
  calculatedPrice: number,
  description: string,
  map: ReactNode,
  rating: number,

}

const Post: React.FC<Post> = ({ placeName, photos, postName, calculatedPrice, description, map, rating }) => {
  const [imageSelected, setImageSelected] = useState(0);

  return (

    <Box className='w-full rounded-xl my-4 ' >

      <Box className='rounded-xl'>
        <Box  className="bg-cover bg-center rounded-t-xl flex justify-between items-end p-5" sx={{height:'70vh',backgroundImage:`linear-gradient(to bottom, rgba(195, 105, 105, 0) 60%, rgba(9, 51, 5, 0.5) ,rgba(9, 51, 5, 1) ,#062104 ), url(${photos[imageSelected]})`,backgroundColor:'blue'}} >
          <Box>
            <Rating size='small' sx={{ color: deepOrange, padding: '10px', backgroundColor: 'rgba(168, 107, 15, 0.4)', borderRadius: '10px' }} value={rating} readOnly />
            <Typography color={'white'} typography={'h3'} sx={{ fontWeight: 'medium' }}>{placeName}</Typography>
          </Box>
          <Stack spacing={1}>
            {photos.map(((data, index) => {
              return <img src={data} alt="" onClick={() => setImageSelected(index)} className={`${index == imageSelected && 'border border-white'} rounded-lg`} height={40} width={40} />
            }))}
          </Stack>

        </Box>


       <PostDetails />


      </Box>

      <Box className='rounded-b-xl flex justify-between p-5' sx={{ backgroundColor:'#062104'  }}
      >
        <Typography typography={'h4'} color={'grey'}>${calculatedPrice}</Typography>
     
        <Button variant='contained'>Book Now</Button>
      </Box>

    </Box>

  )
}

export default Post