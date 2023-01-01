import { useState, useEffect } from "react";
import CalculationInputsView, {
  AllInputStates,
} from "./Components/CalculationInputsView/CalculationInputsView";
import "./Components/MainStyling/MainStyling.scss";
import ResultsView from "./Components/ResultsView/ResultsView";

function App() {
  const [allInputValues, setAllInnputValues] = useState<AllInputStates>({
    boligpris: "",
    egenkapital: "",
    gjeld: "",
    inntekt: "",
  });

  const getAllValues = (updatedState: any) => {
    setAllInnputValues(updatedState);
    console.log(allInputValues);
  };

  return (
    <div className="App">
      <CalculationInputsView onChange={getAllValues} />
      <ResultsView />
    </div>
  );
}

export default App;
