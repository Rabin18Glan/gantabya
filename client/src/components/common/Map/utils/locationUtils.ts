
import axios from 'axios';

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/reverse';

export interface LocationData {
  ISO_3166_1_alpha_2: string;
  ISO_3166_1_alpha_3: string;
  ISO_3166_2: string[];
  _category: string;
  _normalized_city: string;
  _type: string;
  city: string;
  city_district: string;
  continent: string;
  country: string;
  country_code: string;
  county: string;
  house_number: string;
  office: string;
  political_union: string;
  postcode: string;
  road: string;
  state: string;
  state_code: string;
  suburb: string;
}

export const fetchLocationData = async (lat: number, lon: number): Promise<LocationData | null> => {
  try {
    const response = await axios.get(NOMINATIM_URL, {
      params: {
        lat,
        lon,
        format: 'json',
        addressdetails: 1,
      },
    });

    const data = response.data.address;

    return {
      ISO_3166_1_alpha_2: data.country_code.toUpperCase(),
      ISO_3166_1_alpha_3: '', // Nominatim does not provide this, you may need to map it yourself
      ISO_3166_2: [], // Nominatim does not provide this, you may need to map it yourself
      _category: data.category || '',
      _normalized_city: data.city || data.town || data.village || '',
      _type: data.type || '',
      city: data.city || data.town || data.village || '',
      city_district: data.city_district || '',
      continent: '', // Nominatim does not provide this, you may need to map it yourself
      country: data.country || '',
      country_code: data.country_code || '',
      county: data.county || '',
      house_number: data.house_number || '',
      office: data.office || '',
      political_union: '', // Nominatim does not provide this, you may need to map it yourself
      postcode: data.postcode || '',
      road: data.road || '',
      state: data.state || '',
      state_code: data.state_code || '',
      suburb: data.suburb || '',
    };
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
};