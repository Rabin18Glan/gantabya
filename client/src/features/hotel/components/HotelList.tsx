
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Hotel {
  name: string;
  rate: number;
  image: string;
}

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('https://api.opentripmap.com/0.1/en/places/radius', {
          params: {
            apikey: '5ae2e3f221c38a28845f05b6db291003e252b2da0923ae175b92d4ee',
            radius: 1000,
            lon: 2.3522, // Longitude of the location (e.g., Paris)
            lat: 48.8566, // Latitude of the location (e.g., Paris)
            kinds: 'hotels'
          }
        });

        console.log(response)

        const hotelData = response.data.features.map((feature: any) => ({
          name: feature.properties.name,
          rate: feature.properties.rate || 0,
          image: feature.properties.image || 'https://via.placeholder.com/100' // Placeholder image
        }));

        setHotels(hotelData);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hotels in Paris</h1>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <h2>{hotel.name}</h2>
            <img src={hotel.image} alt={hotel.name} width="100" />
            <p>Rating: {hotel.rate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;