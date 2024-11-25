import  L from 'leaflet'

const handleGeocode = async (address: string) => {
  
    const geocoder = L.Control.Geocoder.nominatim();

    const results: any = await new Promise((resolve, reject) => {
      geocoder.geocode(address, (results: any) => {
        if (results.length > 0) {
          resolve(results);
        } else {
          reject("No such location");
        }
      });
             });

           if (results.length > 0) {

      return results;
             }
             
         return null;

         
           };

           export default handleGeocode