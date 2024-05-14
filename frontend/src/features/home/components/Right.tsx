import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Right() {
  return (
    <Grid item xs sx={{  backgroundColor:'background.default',height:'91vh'  }} >
    <Box sx={{ backgroundColor:'background.default' }}><Typography color={'white'}>sx</Typography></Box>
  </Grid>

  )
}

export default Right