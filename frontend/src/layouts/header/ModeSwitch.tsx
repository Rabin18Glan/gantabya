import { BedtimeOutlined, BedtimeRounded, Brightness2Rounded, Brightness7Rounded } from '@mui/icons-material'
import { IconButton, useMediaQuery } from '@mui/material'
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
 
      <IconButton onClick={handleSwitch} sx={{ position:'fixed',right:'10px',top:'70px' }}>
{  colorMode=='dark'?    <BedtimeRounded sx={{fontSize:'60px',color:grey[800],}}/>:<BrightnessHighRoundedIcon sx={{fontSize:'60px'}}/>}
      </IconButton>
  
  )
}

export default ModeSwitch