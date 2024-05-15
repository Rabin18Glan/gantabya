import { Image } from '@mui/icons-material'
import { Box, Button, Container, List, Rating, Stack, Tabs, Typography } from '@mui/material'
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

    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '700px', // Adjust height as needed
        backgroundImage: `url(${photos[imageSelected]})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBlock: '15px',
        borderRadius: '10px'
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          borderRadius: '10px',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '80%',
          background: 'linear-gradient(to bottom, rgba(10, 32, 14, 0),rgba(10, 32, 14, 0) ,rgba(10, 32, 14, 0.1) , rgba(10, 32, 14, 0.7),rgba(10, 32, 14, 1) 60%)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px', alignItems: 'baseline' }}>
          <Container>
            <Rating size='small' sx={{ color: deepOrange, padding: '10px', backgroundColor: 'rgba(168, 107, 15, 0.4)', borderRadius: '10px' }} value={rating} readOnly />
            <Typography color={'white'} typography={'h3'} sx={{ fontWeight: 'medium' }}>{placeName}</Typography>
          </Container>
          <Stack spacing={1}>
            {photos.map(((data, index) => {
              return <img src={data} alt="" onClick={() => setImageSelected(index)} className={`${index == imageSelected && 'border border-white'} rounded-lg`} height={40} width={40} />
            }))}
          </Stack>

        </Box>


        <Box sx={{ height: '40%' }}><PostDetails /></Box>


      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          borderRadius: '10px',
          width: '100%',
          height: '20%',
          padding: '10px',
          background: 'linear-gradient(to bottom, rgba(10, 32, 14, 0),rgba(10, 32, 14, 0) ,rgba(10, 32, 14, 0.1) , rgba(10, 32, 14, 0.7),rgba(10, 32, 14, 1) 60%)',
        }}
      >
        <Typography typography={'h4'} color={'grey'}>${calculatedPrice}</Typography>
        <Button variant='contained'>Book Now</Button>
      </Box>

    </Box>

  )
}

export default Post