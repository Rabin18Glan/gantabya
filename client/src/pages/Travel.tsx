import { MyLocation } from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import handleGeocode from '../components/common/Map/utils/handleGeoCode';
import MapView from '../features/travel/components/MapView';
import Posts from '../features/travel/components/Posts';
import useUserLocation from '../hooks/useUserLocation';


import LocationSearch from '../features/travel/components/LocationSearch';

import TravelOptionsButtons from '../features/travel/components/TravelOptionsButtons';
import ViewSelector from '../features/travel/components/ViewSelector';
import { LocationData } from '../types/map.type';
type Loc={
  name:string
}
const Travel: React.FC = () => {
  const [selectedView, setSelectedView] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Loc>();
  const [results, setResults] = useState<LocationData[]>([]);
  const { locationData } = useUserLocation();

  const handleSearch = useCallback(async (value: string) => {
    setSelectedLocation({ name: value });
    if (value) {
      const result = await handleGeocode(value);
      setResults(result);
    }
  },[selectedLocation]);

  const handleSelectLocation = (result: LocationData) => {
    setSelectedLocation(result);
    setResults([]);
  };

  const renderView = () => {
    if (selectedView === 0) {
      return <Posts />;
    } else if (selectedView === 1) {
      return <MapView />;
    }
    return null;
  };

  return (
    <div className='h-[83vh] md:h-[90vh] bg-gray-100 flex flex-col p-5'>
      {renderView()}
      <div className='absolute flex items-center gap-2 animate-pulse'>
       Current Location: <MyLocation className='text-orange-500' />
        <h1 className='text-2xl font-cursive font-semibold'>{locationData?.city}</h1>
      </div>

      <LocationSearch
        selectedLocation={selectedLocation}
        handleSearch={handleSearch}
        results={results}
        handleSelectLocation={handleSelectLocation}
      />

      <ViewSelector selectedView={selectedView} setSelectedView={setSelectedView} />

      <TravelOptionsButtons
        travelOptions={[
          { key: 1, name: 'bike', logo: 'bike.png' },
          { key: 2, name: 'bus', logo: 'bus.png' },
          { key: 3, name: 'magic', logo: 'magic.webp' },
          { key: 4, name: 'riksaw', logo: 'riksaw.png' },
          { key: 5, name: 'taxi', logo: 'taxi.png' },
        ]}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </div>
  );
};

export default Travel;
