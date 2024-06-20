import { ListSharp, SortByAlphaOutlined, SortRounded, SouthAmericaOutlined } from '@mui/icons-material'
import SearchField from '../components/SearchField'
import ImageMasonry from '../features/local/components/ImageMansory';
import { useState } from 'react';

function Local() {

  const [selectedOption,setSelectedOption] =useState<string>('map');
const options = ['map','places'];

const viewOptions = {
  map:{
  name:'map',
  view:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.83884036011!2d85.02868592546113!3d27.425056572496604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb497ced46c917%3A0xafb8902c7a4532ab!2sHetauda!5e0!3m2!1sen!2snp!4v1718895244908!5m2!1sen!2snp" 
  className='h-full w-full rounded-xl'
     loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
},
places:{name:'places',
  view:<ImageMasonry />
}
}
  return (
    <div className='flex flex-col p-5 h-[85vh] md:h-[90vh] bg-gray-100 '>
         <div className='m-2 flex gap-5  '>
          {options.map((option)=>{
            return <button onClick={()=>setSelectedOption(option)} className={`text-gray-700 border bg-white border-orange-400 shadow-lg shadow-orange-400 p-2 rounded-lg px-5 ${selectedOption==option&&'bg-orange-500 text-white shadow-none'}`}>{option}</button>
          })}
         </div>
         {viewOptions[selectedOption].view}
         {/* <ImageMasonry /> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113329.55766734973!2d84.95569344940316!3d27.42100632786105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb497ced46c917%3A0xafb8902c7a4532ab!2sHetauda!5e0!3m2!1sen!2snp!4v1718792689427!5m2!1sen!2snp" className=' fixed w-20 h-20 bottom-24 right-5 rounded-2xl shadow-md'   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  )
}

export default Local