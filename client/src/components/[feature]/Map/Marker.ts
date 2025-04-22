function CreateMarkerElement(){


    const marker = document.createElement('img');
    marker.src = "/bus.png";
 marker.height=60;
 marker.width=60;

 return marker;
}
  
export const Marker = CreateMarkerElement();


