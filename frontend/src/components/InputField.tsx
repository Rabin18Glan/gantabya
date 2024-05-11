import React from 'react';
import { inputStyle } from '../const/const';

interface CustomInputProps {
    type: string;
    placeholder: string;
    error?: string;
    register: any; // Register from react-hook-form
}

const InputField: React.FC<CustomInputProps> = ({ type, placeholder, error, register }) => {
    return (
        <div className="input-container">
            <input
                className={`${
                    error ? 'border-red-500' : ''
                } ${inputStyle}`}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error && <div className="text-red-500">{error}</div>}
        </div>
    );
};

export default InputField;
