
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

function SearchLocation() {
  const map = useMap();

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim();
    let geocoderControl = null;

    const setupGeocoder = () => {
      // Parse /?geocoder=nominatim from URL
      if (typeof URLSearchParams !== "undefined" && location.search) {
        const params = new URLSearchParams(location.search);
        const geocoderString = params.get("geocoder");
        if (geocoderString && L.Control.Geocoder[geocoderString]) {
          geocoder = L.Control.Geocoder[geocoderString]();
        } else if (geocoderString) {
          console.warn("Unsupported geocoder", geocoderString);
        }
      }
      return geocoder;
    };

    const addGeocoderControl = () => {
      if (geocoderControl) {
        map.removeControl(geocoderControl); // Remove previous geocoder control
      }

      const geocoderInstance = setupGeocoder();
      geocoderControl = L.Control.geocoder({
     
        query: "",
        placeholder: "Search here...",
        defaultMarkGeocode: false,
        geocoder: geocoderInstance,
      })
        .on("markgeocode", function (e) {
          const { center, name, bbox } = e.geocode;
          L.marker(center)
            .addTo(map)
            .bindPopup(name)
            .openPopup();
          map.fitBounds(bbox);
        })
        .addTo(map);
    };

    addGeocoderControl(); // Initial setup

    return () => {
      if (geocoderControl) {
        map.removeControl(geocoderControl); // Cleanup previous geocoder control
      }
    };
  }, [map]);

  return null;
}

export default SearchLocation;