import { latLng, LatLng, LatLngExpression } from "leaflet"
import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"

export default function UserLocationMarker() {
    const [position, setPosition] = useState<LatLngExpression>({
        lat:5,
        lng:9
    })
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }