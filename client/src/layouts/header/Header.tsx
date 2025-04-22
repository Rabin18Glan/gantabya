// import { SortRounded } from '@mui/icons-material'
import SearchLocation from '@/components/common/other/SearchLocation';
import NavigationBar from './components/NavigationBar';


import UserAccountDropDown from './components/UserAccountDropDown';
import SearchField from '@/components/common/SearchField';
import { useState } from 'react';


function Header() {
  const [isTrue, setIsTrue]  = useState(false);

 
  return (


    <>

        <div className=" z-50 fixed top-4 bg-transparent px-2  flex w-full justify-between items-center ">
          

         <div className='flex items-center justify-center'>
         {/* <div className=' flex shadow-lg  h-[40px] justify-center items-center gap-2 bg-gray-100 rounded-xl pl-2'>
                
                
          <SearchField />
          
          </div> */}
          <div onClick={()=>{ console.log("Clicke");setIsTrue(prev=>!prev)}} className=' flex items-center cursor-pointer'>
              <img className='w-10' src="logo.png" alt="" />
             
              </div>
        
            <NavigationBar />
         </div>
          

       <UserAccountDropDown />

        </div>


    
   

    </>

  )
}

export default Header