
import React from "react";

interface RoutingResultsProps {
  results: any[];
  onSelect: (result: any) => void;
}

const RoutingResults: React.FC<RoutingResultsProps> = ({ results, onSelect }) => {
  return (
    <div className="results-dropdown">
      {results.map((result, index) => (
        <div key={index} onClick={() => onSelect(result)}>
          {result.name}
        </div>
      ))}
    </div>
  );
};


export default RoutingResults


