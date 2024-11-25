import { SortRounded } from '@mui/icons-material'
import SearchField from '../../components/common/SearchField'
import NavigationBar from './components/NavigationBar'


function Header() {


  const handleSearch = ()=>{

  }
  return (


   <>
    <div className='px-5 flex flex-col   h-[10vh] justify-center items-between   bg-gray-100 md:bg-white'>
      <div className=" flex justify-between items-center"> 
        <div className=" flex items-center gap-5">
          <div className='flex items-center cursor-pointer'>
            <img className='w-12' src="logo.png" alt="" />
            <h1 className='text-3xl font-semibold delay-100 duration-200 ease-in hover:animate-pulse font-cursive text-shadow-sm'>Gantabya</h1></div>
            {/* <SearchField handleSearch={handleSearch} /> */}
      
      </div>
<div className=''>
      <NavigationBar className='hidden lg:w-[500px] md:w-[50vw]   md:flex md:static md:justify-between  ' />
</div>

      <div className=" flex items-center justify-end gap-3">
     <div className=' border border-orange-500 p-1 h-10 w-10 flex items-center justify-center rounded-full'> <img className='rounded-full w-8 h-8  bg-cover' src="profile.jpg" alt="" />
     </div>
     <SortRounded />
       </div>

       </div>
      
   
     </div>
       <NavigationBar className='md:hidden' />

       </>
  
  )
}

export default Header