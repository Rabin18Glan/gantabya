import { SortRounded } from '@mui/icons-material'
import SearchField from '../../components/SearchField'
import NavigationBar from './NavigationBar'


function Header() {
  return (
   <>
    <div className=' flex flex-col  p-5 pb-0 h-[10vh] md:h-[10vh] md:justify-center md:items-between   bg-gray-100 md:bg-white'>
      <div className=" flex justify-between items-center"> 
        <div className="md:flex md:items-center gap-5">
          <div className='flex items-center'>
            <img className='w-12' src="logo.png" alt="" />
            <h1 className='text-3xl font-semibold delay-100 duration-200 ease-in animate-pulse font-cursive'>Gantabya</h1></div>
      <SearchField className='hidden  md:w-10 lg:w-auto md:rounded-xl md:flex md:h-10' handleSearch={()=>{}}/>
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
       <SearchField className=' md:hidden mt-3 mx-2' handleSearch={()=>{}} placeholder='Search...' />
   
   
     </div>
       <NavigationBar className='md:hidden' />
       <img className='hover:shadow-xl border-black w-20 h-20 fixed bottom-24 rounded-xl shadow-md right-5' src="map.png" alt="" />
       </>
  
  )
}

export default Header