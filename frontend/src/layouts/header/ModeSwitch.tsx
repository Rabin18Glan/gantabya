import { Brightness2Rounded, Brightness7Rounded } from '@mui/icons-material'
import { IconButton, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggle } from '../../store/slices/colorMode'


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
{  colorMode=='dark'?    <Brightness2Rounded sx={{fontSize:'60px' ,   boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
      color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',}} />:<Brightness7Rounded sx={{fontSize:'60px'}}/>}
      </IconButton>
  
  )
}

export default ModeSwitch