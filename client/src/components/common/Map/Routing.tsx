     
import L from "leaflet";
import "leaflet-routing-machine";
import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { LocationData } from "../../../types/map.type";
import handleGeocode from "./utils/handleGeoCode";


const RoutingComponent: React.FC = () => {
  const map = useMap();
  const [showResults,setShowResults] =useState(false);
  const [active,setActive] = useState('')
  const [sourceResult,setSourceResult] = useState<LocationData[]>([])
  const [destinationResult,setDestinationResult] = useState<LocationData[]>([])
  const [sourceLocation,setSourceLocation]= useState<LocationData>();
  const [destinationLocation,setDestinationLocaiton]= useState<LocationData>();


  const createButtonControl = (name: string) => {
    const button = L.Control.extend({
      onAdd: () => {
        const Button = L.DomUtil.create('button', 'leaflet-control-button');
        Button.innerHTML = name;
        Button.className = ' bg-black p-2 rounded-xl text-white shadow-lg shadow-white cursor-pointer ';
        Button.addEventListener('click', () => {
          var CustomFormatter = L.Routing.Formatter.extend({
            formatInstruction: function() {
                return ''; // Hide instructions
            },
            formatDistance: function() {
                return ''; // Hide distance
            },
            formatTime: function() {
                return ''; // Hide time
            }
        });
         
          if (sourceLocation?.center && destinationLocation?.center) {
            // Example routing setup
            L.Routing.control({
              waypoints: [sourceLocation.center, destinationLocation.center],
              lineOptions: {
                styles: [{ color: "#6FA1EC", weight: 4 }],
                extendToWaypoints: false,
                missingRouteTolerance: 1,
              },
              show: false,
              addWaypoints:true,
              routeWhileDragging: true,
              showAlternatives: true,
              formatter:new CustomFormatter(),
          
               summaryTemplate:'',
               
              

            }).addTo(map);
          } else {
            alert("No location");
          }
        });
        return Button;
      }
    });
    return new button({ position: "topleft" });
  };

  const createDivResult= () => {
    const Result = L.Control.extend({
      onAdd: () => {
        const resultDiv = L.DomUtil.create('div', 'leaflet-control-button');
      if(active== 'from'){
        for(let i=0;i<sourceResult.length;i++)
          {
            const li = L.DomUtil.create('li', 'leaflet-control');
            li.innerHTML = sourceResult[i].name;
            li.className = 'w-72 list-none  bg-gray-200 p-2 hover:bg-gray-100 cursor-pointer shadow-inner rounded-lg';
            li.addEventListener('click',()=>{
            
             setSourceLocation(sourceResult[i])
             setShowResults(false)
            })
            resultDiv.appendChild(li);
          }
          resultDiv.className = 'absolute left-44'
      }else if(active=='to'){
        for(let i=0;i<destinationResult.length;i++)
          {
            const li = L.DomUtil.create('li', 'leaflet-control');
            li.innerHTML =destinationResult[i].name;
            li.className = 'list-none w-72  bg-gray-200 p-2 hover:bg-gray-100 cursor-pointer shadow-inner rounded-lg';
            li.addEventListener('click',()=>{
             setDestinationLocaiton(destinationResult[i]);
             setShowResults(false)
            })
            resultDiv.appendChild(li);
          }
      resultDiv.className = '  absolute left-44 top-14'
      } 
      resultDiv.className = ' w-auto '+ resultDiv.className;
        return resultDiv;
      }
    });
    return new Result({ position: "topleft" });
  };

  const createInputControl = (placeholder: string) => {
    const input = L.Control.extend({
      onAdd: () => {
        const Input = L.DomUtil.create("input", "leaflet-help-button");
        Input.placeholder = placeholder;
        Input.className = 'bg-gray-100 border border-gray-400 p-3 focus:border-gray-500 rounded-xl shadow-inner shadow-white';
        Input.addEventListener('focus',()=>{
          setShowResults(true)
          if (placeholder === 'From') {
       
           setActive('from')
            
          } else if (placeholder === 'To') {
            setActive('to')
         
          }
        })

        // Input.addEventListener('blur',()=>{
        //   
        // })

        Input.addEventListener("change", async (e: any) => {
          console.log(e.target.value);
          try {
             const R= await handleGeocode(e.target.value)
             console.log(R)
            if (R) {
              if (placeholder === 'From') {
                setSourceResult(R);
                setSourceLocation(R[0])
             
                
              setActive('from')
              
                console.log(active)
              } else if (placeholder === 'To') {
                setDestinationResult(R)
             setDestinationLocaiton(R[0]);
              setActive('to')
               console.log(active)
              }
             
              Input.value = e.target.value;
              setShowResults(true)
            } else {
              console.log("Geocoding failed for address:", e.target.value);
            
           }
            



           

            
          } catch (error) {
            console.error("Geocoding error:", error);
          }
        });

        // // Input.value = selectedResult?selectedResult:;
          if(placeholder=='From'&&sourceLocation)
            {
              Input.value = sourceLocation.name;
              
            }
            if(placeholder=='To'&&destinationLocation)
              {
                Input.value = destinationLocation.name;
                
              }
        return Input;
      }
    });
    return new input({ position: "topleft" });
  };

  useEffect(() => {



    const sourceInput = createInputControl('From');
    sourceInput.addTo(map);
    const destinationInput = createInputControl('To');
    destinationInput.addTo(map);
    const btn = createButtonControl('Go...');
    btn.addTo(map);
    

    return () => {
      map.removeControl(sourceInput);
      map.removeControl(destinationInput);
      map.removeControl(btn);
    };
  }, [map,sourceLocation,destinationLocation,active,sourceResult,destinationResult,setDestinationLocaiton,setSourceLocation]);

  useEffect(()=>{
    const showLocations = createDivResult();
    showResults?showLocations.addTo(map):console.log("don't show");
    return () => {
      map.removeControl(showLocations)}
  },[showResults,active,sourceResult,destinationResult])



  return null;
};

export default RoutingComponent;