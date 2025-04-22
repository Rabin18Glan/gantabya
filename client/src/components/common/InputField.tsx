import React from 'react';
import { inputStyle } from '../../const/const';

interface CustomInputProps {
    id?:string,
    label?:string,
    name?:string,
    type: string;
    placeholder?: string;
    error?: string;
    register: any; // Register from react-hook-form
}

const InputField: React.FC<CustomInputProps> = ({ id,label,type, placeholder, error, register ,name}) => {
    return (
     <div className="space-y-2">
          <label htmlFor={id} className="block text-lg font-semibold text-gray-700">{label}</label>
          <input
          
            id={id}
            type={type}
            {...register}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
          />
          {error&& <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;
