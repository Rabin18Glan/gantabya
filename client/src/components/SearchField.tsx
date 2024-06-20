import { SearchOffOutlined, SearchOutlined } from '@mui/icons-material';
import React, { useState } from 'react'

interface SearchFieldProps{
    placeholder?:string;
    className?:string;
    handleSearch:()=>{}

}


function SearchField({placeholder,handleSearch,className}:SearchFieldProps) {
const [isFocused,setIsFocused] = useState<boolean>(false);
    

  return (
    <div className={` bg-gray-200 flex p-1 rounded-md  text-gray-700 ${isFocused&&'bg-white text-gray-700 md:w-32'} ${className}`}>
        <input onBlur={()=>setIsFocused(false)} onFocus={()=>  setIsFocused(true)} type="text" className='  outline-none  bg-transparent w-[90%] ' placeholder={placeholder} />
        <button className='' onClick={handleSearch}><SearchOutlined className={`text-gray-400 ${isFocused&&'text-black'} `} /></button></div>
  )
}

export default SearchField