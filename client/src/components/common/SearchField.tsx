
import React, { MouseEventHandler, useState } from 'react'
import { FaSearch } from 'react-icons/fa';

interface SearchFieldProps{
    placeholder?:string;
    className?:string;
    handleSearch?:MouseEventHandler<HTMLButtonElement>

}


function SearchField({placeholder,handleSearch,className}:SearchFieldProps) {
const [isFocused,setIsFocused] = useState<boolean>(false);
    

  return (

<div onClick={()=>setIsFocused(true)} className={`w-[250px] h-full  flex justify-center items-center  rounded-r-xl text-gray-700 
  ${isFocused&&' bg-background'}
  ${!isFocused&&' bg-gray-100'}
   `}>
        <input  onBlur={()=>setIsFocused(false)} onFocus={()=>  setIsFocused(true)} type="text" className={`outline-none bg-transparent w-[90%]`} placeholder={"Search "} />

        <button onClick={handleSearch}><FaSearch className={`text-gray-400 ${isFocused&&'text-black'} hover:text-orange-500`} /></button>
        
        </div>

  )
}

export default SearchField