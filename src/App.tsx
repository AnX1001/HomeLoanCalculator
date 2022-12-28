import React from 'react';
import CalculationInputsView from "./Components/CalculationInputsView/CalculationInputsView";
import "./Components/MainStyling/MainStyling.scss";
import ResultsView from "./Components/ResultsView/ResultsView";

function App() {
  return (
    <div className="App">
      <CalculationInputsView />
      <ResultsView />
    </div>
  );
}

export default App;
