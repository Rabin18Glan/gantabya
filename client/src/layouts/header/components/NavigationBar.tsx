import { FaBus, FaChartColumn, FaPeopleGroup, FaQrcode } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
interface Navigation {
  id: number;
  name: string
  title: string;
  icon: any;

}

const navigations: Navigation[] = [
    
  {
  id: 1,
  name: 'travel',
  title: 'Travel',
  icon: <FaBus />

},
{
  id: 2,
  name: 'ride-connect',
  title: 'Connect',
  icon: <FaPeopleGroup />

},
// {
//   id: 3,
//   name: 'scan',
//   title: 'Scan',
//   icon:<FaQrcode />

// },
{
  id: 4,
  name: 'tour-package',
  title: 'Packages',
  icon:<FiPackage />

},
{
  id: 5,
  name: 'dashboard',
  title: 'Dashboard',
  icon: <FaChartColumn />

},




]

function NavigationBar({ className }: { className?: string }) {


  return (
    
<div className='z-50 bg-transparent left-0 fixed bottom-3 w-full  flex items-center justify-around lg:ml-96 lg:static  md:w-[500px] '>
{
      navigations.map((navigation,index)=>{
        const {id,name,title,icon} = navigation;
        const isQRCode = name=='scan';
        return <NavLink to={name} className={({isActive,isPending,isTransitioning})=>(`
          flex gap-1 p-1 rounded-xl  justify-center items-center shadow-lg
          ${isActive&&'text-accent  bg-background'}
          ${!isActive&&'bg-gray-100'}
          ${isPending&&'text-primary'} 
          ${isTransitioning&&'text-secondary'}

        
          `)} key={id}>
            {icon}{!isQRCode&&<span >{title}</span>}
            </NavLink>

      })
     }
</div>
    
  )
}

export default NavigationBar

// ${isQRCode&&'z-50  hover:shadow-accent hover:text-accent text-5xl bg-background rounded-full relative bottom-7 p-5 text-foreground shadow-lg shadow-primary md:fixed md:right-10'} 