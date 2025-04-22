import L from "leaflet";
import "leaflet-routing-machine";
import React, { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { LocationData } from "../../../types/map.type";
import handleGeocode from "./utils/handleGeoCode";

const RoutingComponent: React.FC = () => {
  const map = useMap();
  const [showResults, setShowResults] = useState(false);
  const [active, setActive] = useState("");
  const [sourceResult, setSourceResult] = useState<LocationData[]>([]);
  const [destinationResult, setDestinationResult] = useState<LocationData[]>([]);
  const [sourceLocation, setSourceLocation] = useState<LocationData>();
  const [destinationLocation, setDestinationLocation] = useState<LocationData>();

  const createInputControl = (placeholder: string) => {
    const inputControl = L.Control.extend({
      onAdd: () => {
        const input = L.DomUtil.create("input", "leaflet-input-control");
        input.placeholder = placeholder;
        input.className =
          "bg-gray-100 border border-gray-400 p-3 rounded-xl shadow-inner";
        input.value =
          placeholder === "From" && sourceLocation
            ? sourceLocation.name
            : placeholder === "To" && destinationLocation
            ? destinationLocation.name
            : "";

        input.addEventListener("focus", () => {
          setActive(placeholder.toLowerCase());
          setShowResults(true);
        });

        input.addEventListener("change", async (e: any) => {
          const query = e.target.value;
          try {
            const results = await handleGeocode(query);
            console.log("Geocode results:", results); // Log results for debugging
            if (results) {
              if (placeholder === "From") {
                setSourceResult(results);
                setSourceLocation(results[0]);
              } else if (placeholder === "To") {
                setDestinationResult(results);
                setDestinationLocation(results[0]);
              }
            }
          } catch (error) {
            console.error("Geocoding error:", error);
          }
        });

        return input;
      },
    });
    return new inputControl({ position: "topleft" });
  };

  const createButtonControl = () => {
    const buttonControl = L.Control.extend({
      onAdd: () => {
        const button = L.DomUtil.create("button", "leaflet-control-button");
        button.textContent = "Go...";
        button.className = "bg-black p-2 rounded-xl text-white shadow-lg";

        button.addEventListener("click", () => {
          if (sourceLocation?.center && destinationLocation?.center) {
           const layer = L.Routing.control({
              waypoints: [sourceLocation.center, destinationLocation.center],
              routeWhileDragging: true,
            }).addTo(map);
          } else {
            alert("Please provide both source and destination.");
          }
        });

        return button;
      },
    });
    return new buttonControl({ position: "topleft" });
  };

  const createResultList = () => {
    const resultControl = L.Control.extend({
      onAdd: () => {
        const resultDiv = L.DomUtil.create("div", "leaflet-result-list");
        const results =
          active === "from" ? sourceResult : active === "to" ? destinationResult : [];

        results.forEach((location) => {
          const item = L.DomUtil.create("div", "result-item", resultDiv);
          item.textContent = location.name;
          item.className =
            "p-2 bg-gray-200 hover:bg-gray-100 rounded-lg shadow cursor-pointer";
          item.addEventListener("click", () => {
            if (active === "from") setSourceLocation(location);
            if (active === "to") setDestinationLocation(location);
            setShowResults(false);
          });
        });

        resultDiv.style.display = (results.length > 0 && showResults) ? "block" : "none";
        resultDiv.className = "absolute left-44 top-14 bg-white rounded-lg";
        return resultDiv;
      },
    });
    return new resultControl({ position: "topleft" });
  };

  useEffect(() => {
    const sourceInput = createInputControl("From");
    const destinationInput = createInputControl("To");
    const goButton = createButtonControl();
    const resultList = createResultList();

    sourceInput.addTo(map);
    destinationInput.addTo(map);
    goButton.addTo(map);
    if (showResults) resultList.addTo(map);

    return () => {
      map.removeControl(sourceInput);
      map.removeControl(destinationInput);
      map.removeControl(goButton);
      map.removeControl(resultList);
    };
  }, [
    map,
    sourceLocation,
    destinationLocation,
    showResults,
    sourceResult,
    destinationResult,
    active,
  ]);

  return null;
};

export default RoutingComponent;
