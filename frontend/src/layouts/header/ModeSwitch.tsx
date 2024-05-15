import { BedtimeRounded } from '@mui/icons-material'
import BrightnessHighRoundedIcon from '@mui/icons-material/BrightnessHighRounded'
import { IconButton, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
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
 
    <IconButton  onClick={handleSwitch} sx={{ position:'fixed',right:'10px',top:'70px',backgroundColor:'orange',":hover":'background'}}>
    {  colorMode=='dark'?<BedtimeRounded sx={{fontSize:'40px',color:'whitesmoke',}}/>:<BrightnessHighRoundedIcon sx={{fontSize:'40px',color:'whitesmoke'}}/>}
          </IconButton>
  )
}

export default ModeSwitch