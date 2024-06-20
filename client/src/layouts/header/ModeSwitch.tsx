import { Brightness2Outlined, Brightness7Rounded } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
function ModeSwitch() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const [isDark,setIsDark]=useState(false)



    const handleMode = ()=>{
      document.documentElement.classList.toggle('dark');
        
      setIsDark(prev=>!prev)
    }
    
  
    // useEffect(()=>{
  
    //   document.documentElement.classList.toggle('dark');
      
    
    //     console.log(prefersDarkMode);
    // },[isDark]);

  return (
    <button className='fixed right-10 p-2 rounded-full top-32 shadow-gray-700 dark:shadow-gray-500 shadow-lg dark:bg-black  dark:border-white bg-yellow-500 hover:bg-orange-500 hover:top-[126px] z-50'  onClick={handleMode} >
    {isDark ? <Brightness2Outlined  sx={{ fontSize: '30px' ,color:'white' }} /> : <Brightness7Rounded htmlColor='white' sx={{ fontSize: '30px' }} />}
  </button>
  )
}

export default ModeSwitch