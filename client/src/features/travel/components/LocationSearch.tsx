import React from 'react';
import { LocationData } from '../../../types/map.type';
// import { LocationData } from '../../../utils/locationUtils';

type Loc = {
  name:string;
}
interface Props {
  selectedLocation?: Loc;
  results:LocationData[];
  handleSearch: (value: string) => void;
  handleSelectLocation: (result: LocationData) => void;
}

const LocationSearch: React.FC<Props> = ({
  selectedLocation,
  results,
  handleSearch,
  handleSelectLocation,
}) => {
  return (
    <div className='flex gap-2 absolute top-36'>
      <input
        placeholder='Where do you want to go'
        className='p-2 rounded-lg outline-none focus:outline-gray-500'
        onChange={(e) => handleSearch(e.target.value)}
        value={selectedLocation?.name || ''}
      />
      <div className='absolute top-12'>
        {results.map((result) => (
          <div
            key={result.name}
            className='w-30 p-2 bg-gray-100 text-gray-700 hover:text-gray-100 hover:bg-gray-500 rounded-lg border-2 cursor-pointer'
            onClick={() => handleSelectLocation(result)}
          >
            {result.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
