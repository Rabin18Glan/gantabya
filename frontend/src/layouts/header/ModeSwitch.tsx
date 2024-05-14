import { BedtimeOutlined, BedtimeRounded, Brightness2Rounded, Brightness7Rounded } from '@mui/icons-material'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggle } from '../../store/slices/colorMode'
import { grey } from '@mui/material/colors'
import BrightnessHighRoundedIcon from '@mui/icons-material/BrightnessHighRounded';

function ModeSwitch() { 
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode = useAppSelector(state=>state.mode.mode)
const dispatch = useAppDispatch();


  const handleSwitch =()=>{
   
 const  mode = colorMode=='dark' ? 'light' : 'dark';
    dispatch(toggle({mode}))

  }


  useEffect(()=>{
    dispatch(toggle({mode:prefersDarkMode?'dark':'light'}));
  },[prefersDarkMode])
  return (
 
    <IconButton  onClick={handleSwitch} sx={{ position:'fixed',right:'10px',top:'70px',backgroundColor:'orange',":hover":'background'}}>
    {  colorMode=='dark'?<BedtimeRounded sx={{fontSize:'40px',color:'whitesmoke',}}/>:<BrightnessHighRoundedIcon sx={{fontSize:'40px',color:'whitesmoke'}}/>}
          </IconButton>
  )
}

export default ModeSwitch