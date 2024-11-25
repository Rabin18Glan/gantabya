
import { useState, useEffect } from 'react';
import { fetchLocationData, LocationData } from '../components/common/Map/utils/locationUtils'; // Adjust path as needed

type LocationState = {
  latitude: number|null ;
  longitude: number|null ;
  error: string | null;
  locationData: LocationData | null;
};

const useUserLocation = (): LocationState => {
  const [latitude, setLatitude] = useState<number|null>(null);
  const [longitude, setLongitude] = useState<number|null>(null);
  const [error, setError] = useState<string | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    geo.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude);
      setLongitude


    })

    const watcher = geo.watchPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setError(null);

        const data = await fetchLocationData(latitude, longitude);
        setLocationData(data);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => {
      geo.clearWatch(watcher);
    };
  }, []);

  console.log(locationData)
  return { latitude, longitude, error, locationData };
};

export default useUserLocation;