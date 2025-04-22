// src/types/leaflet-control-geocoder.d.ts
import * as L from 'leaflet';

// Extend the leaflet module to include the geocoder control
declare module 'leaflet' {
  namespace Control {
    // Return the correct type (L.Control.Geocoder) instead of just L.Control
    function geocoder(options?: any): L.Control.Geocoder;
  }

  // Include the full type for L.Control.Geocoder (with 'on' method)
  namespace Control {
    class Geocoder extends L.Control {
      on(event: string, callback: (e: any) => void): this;
    }
  }
}
