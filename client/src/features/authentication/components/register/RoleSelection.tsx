import MultiStepFormWrapper from "@/layouts/wrappers/MultiStepFormWrapper";
// import { CarRental, Face } from "@mui/icons-material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BiCar } from "react-icons/bi";
import { FaPersonBooth } from "react-icons/fa";
import {FcBusinessman} from 'react-icons/fc'
const RoleSelection = () => {
  const { register, formState: { errors },getValues} = useFormContext();
  const [selectedRole,setSelectedRole] = useState(getValues('role'))



  return (
<MultiStepFormWrapper title="Choose your role">
<div className="flex flex-col md:flex-row gap-5">
<label onClick={()=>{setSelectedRole('passenger')}} className={` p-5 flex gap-5 rounded-lg ${selectedRole=='passenger'?'outline-double bg-primary text-white':' outline outline-1 bg-white text-black'} outline-gray-500 text-lg`}>
      <FcBusinessman size={30}/>
        <input className="hidden"  value="passenger" type="radio" {...register("role")}
         />
         Passenger
      </label>
      
      <label onClick={()=>setSelectedRole('driver')} className={`p-5 flex gap-5 rounded-lg ${selectedRole=='driver'?'outline-double bg-primary text-white':'outline outline-1 bg-white text-black'} outline-gray-500 text-lg`}>
     <BiCar size={30}/>
      <input className="hidden"  value="driver" type="radio" {...register("role")}
         />
         
           Driver
      </label>
      {errors.role && <p>{`${errors.role.message}`}</p>}
</div>
      </MultiStepFormWrapper>
  );
};

export default RoleSelection;
