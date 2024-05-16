import { Avatar, Box, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'


interface User{
  photo:string,
  name:string
}
function Right() {
  const user:User[] =[
    {
      photo:'meruna.jpeg',
      name:'meruna'
    },
    {
      photo:'sabina.webp',
      name:'Sabina'
    },
    {
      photo:'R (5).jpeg',
      name:'Rubina'
    },

  ]
  return (
    <Grid item xs={3} sx={{padding:'10px',  backgroundColor:'background.default',height:'91vh' }} >

    <List>
{user.map((user)=>{
  return <ListItemButton sx={{ display:'flex',gap:'10px' ,borderRadius:'10px'}}><Avatar><img src={user.photo} alt="" /></Avatar><Typography fontSize={17} color={'text.primary'}>{user.name}</Typography></ListItemButton>
})}
    </List>
    
    

  </Grid>

  )
}

export default Right