import { Image } from '@mui/icons-material'
import { Box, Grid, List, Rating, Tabs, Typography } from '@mui/material'
import Post from './Post'
import { ReactNode } from 'react'

function MainPage() {

  const posts:Post[]=[{

  placeName:'Sahid Samark',
  photos:['beutiful.jpeg','R.jpeg'],
  postName:'A beautiful place in hetauda',
  calculatedPrice:100,
  description:'beautiful place in hetauda',
  map:<Box>map</Box>,
  rating:4,


  },
  {

    placeName:'Sahid Samark',
    photos:['beutiful.jpeg','R.jpeg'],
    postName:'A beautiful place in hetauda',
    calculatedPrice:100,
    description:'beautiful place in hetauda',
    map:<Box>map</Box>,
    rating:4,
  
  
    },
  // {

    // placeName:'Sahid Samark',
    // photos:['asdf','asdf'],
    // postName:'A beautiful place in hetauda',
    // calculatedPrice:100,
    // description:'beautiful place in hetauda',
    // map:<Box>map</Box>,
    // rating:4,
  
  
    // },
    // {

    //   placeName:'Sahid Samark',
    //   photos:['asdf','asdf'],
    //   postName:'A beautiful place in hetauda',
    //   calculatedPrice:100,
    //   description:'beautiful place in hetauda',
    //   map:<Box>map</Box>,
    //   rating:4,
    
    
    //   },
];

  return (<>
    <Grid  className=' overflow-y-auto'  item xs={6} sx={{ backgroundColor:'background.default',height:'91vh',paddingInline:'100px' }} >

{posts.map((data)=>{
  return   <Post placeName={data.placeName} 
  photos={data.photos} 
  postName={data.postName} 
  calculatedPrice={data.calculatedPrice}
  description={data.description}
  map={data.map} rating={data.rating}/>
})}

  </Grid>

  </>
  )
}

export default MainPage