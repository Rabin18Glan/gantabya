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

<div onClick={()=>setIsFocused(true)} className={` xl:w-32 h-10 w-10 bg-gray-200 flex justify-center items-center p-1 rounded-xl text-gray-700 ${isFocused&&'bg-white text-gray-700 w-32 border border-gray-200 rounded-xl'} `}>
        <input onBlur={()=>setIsFocused(false)} onFocus={()=>  setIsFocused(true)} type="text" className={`  outline-none  bg-transparent w-full`} placeholder={placeholder} />

        <button onClick={handleSearch}><SearchOutlined className={`text-gray-400 ${isFocused&&'text-black'} hover:text-orange-500`} /></button>
        
        </div>

  )
}

export default SearchField