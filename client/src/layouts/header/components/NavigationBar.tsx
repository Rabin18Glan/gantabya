import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Navigation {
  id: number;
  name: string
  title: string;
  icon: any;

}

function NavigationBar({ className }: { className?: string }) {
  const location = useLocation().pathname.slice(1)
  console.log(location)
  const [active, setActive] = useState<string>(location ? location : 'global');

  const navigate = useNavigate();

  useEffect(() => {
    setActive(location)
  }, [useNavigate])


  const navigations: Navigation[] = [{
    id: 1,
    name: 'travel',
    title: 'Travel',
    icon: <img alt='no image' className='w-10 h-auto object-cover' src='world.png' />

  },
  {
    id: 2,
    title: 'Location',
    name: 'location',
    icon: <img alt='no image' className='w-10 h-auto object-cover' src='location.png' />
  },



  ]
  return (
    <div className={` fixed bottom-0 rounded-t-xl flex  shadow-xl md:shadow-none shadow-gray-400 items-center  bg-white w-[100vw] h-[7vh] md:h-12 dark:bg-gray-700 ${className} z-50`} >
      {navigations.map(navigation => {
        return <div key={navigation.id} className='flex justify-center items-center w-[25%] md:w-[20%]'><div onClick={() => {
          navigate(`./${navigation.name}`);
          setActive(navigation.name)
        }} className={`${active == navigation.name ? ' md:animate-none  md:translate-y-0  duration-200 bg-white  shadow-inner md:shadow-none shadow-orange-200  translate-y-[-30px] border-[10px] dark:border-black border-transparent md:border-0 md:border-b-2  md:border-orange-400 md:duration-0 md:rounded-none overflow-hidden ' : 'text-gray-700 dark:text-gray-200'} p-3 rounded-full w-20  text-center  md:mt-0`}>{navigation.icon}</div> </div>
      })}


    </div>
  )
}

export default NavigationBar