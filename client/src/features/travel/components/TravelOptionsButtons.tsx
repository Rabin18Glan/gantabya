import React from 'react';
import { TravelOptions } from '../../../types/types';


interface Props {
  travelOptions: TravelOptions[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const TravelOptionsButtons: React.FC<Props> = ({ travelOptions, selectedOptions, setSelectedOptions }) => {
  return (
    <div className='flex flex-col md:flex-row md:justify-center md:gap-10 lg:gap-16 md:w-full gap-5 absolute right-5 bottom-16'>
      {travelOptions.map((option) => (
        <div
          key={option.key}
          onClick={() => {
            setSelectedOptions((selected) => {
              const optionSelected = option.name;
              if (optionSelected) {
                if (selected.includes(optionSelected)) {
                  return selected.filter((s) => s !== optionSelected);
                } else {
                  return [...selected, optionSelected];
                }
              } else {
                return selected;
              }
            });
          }}
          className={`shadow-md border-gray-300 hover:shadow-xl hover:shadow-orange-300 hover:bg-blue-100 hover:border-orange-500 ${
            selectedOptions.includes(option.name) && 'shadow-xl border-orange-400 shadow-orange-300 bg-blue-200'
          } w-16 h-16 border-2 flex justify-between items-center rounded-full`}
        >
          <img src={option.logo} alt='' />
        </div>
      ))}
    </div>
  );
};

export default TravelOptionsButtons;
