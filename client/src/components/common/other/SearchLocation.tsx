import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const SearchLocation: React.FC = () => {
  const map = useMap(); // Access Leaflet map instance

  useEffect(() => {
    let geocoderControl: L.Control | null = null;

    const addGeocoderControl = () => {
      if (geocoderControl) {
        map.removeControl(geocoderControl); // Remove existing geocoder control
      }

      // Initialize geocoder control
      geocoderControl = L.Control.geocoder({
        query: "",
        placeholder: "Search here...",
        defaultMarkGeocode: false, // Prevent auto marker placement
      })
        .on("markgeocode", (e: any) => {
          const { center, name, bbox } = e.geocode;

          // Add a marker at the selected location
          L.marker(center)
            .addTo(map)
            .bindPopup(name)
            .openPopup();

          // Adjust the map view to fit the geocoded location
          map.fitBounds(bbox);
        })
        .addTo(map); // Add geocoder control to the map
    };

    addGeocoderControl(); // Add the geocoder control initially

    return () => {
      if (geocoderControl) {
        map.removeControl(geocoderControl); // Cleanup geocoder control
      }
    };
  }, [map]); // Dependency array ensures effect runs when the map changes

  return null; // No UI elements rendered directly
};

export default SearchLocation;
