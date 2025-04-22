import { useContext } from "react";
import { MapContext } from "./mapContext";

export const useMapContext= () => {
    const context = useContext(MapContext);
    if (!context) {
      throw new Error("useMapRef must be used within a MapRefProvider");
    }
    return context;
  };
  