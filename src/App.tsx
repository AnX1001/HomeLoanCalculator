
import { useState } from "react";
import CalculationInputsView, {
  AllInputStates,
} from "./Components/CalculationInputsView/CalculationInputsView";
import "./Components/MainStyling/MainStyling.scss";
import ResultsView from "./Components/ResultsView/ResultsView";
import { CalculateInnvilgetLan } from "./Components/SliderInput/CalculateInnvilgetLan";
import { CalculateLanebehov } from "./Components/SliderInput/CalculateLanebehov";

function App() {
  const [allInputValues, setAllInputValues] = useState<AllInputStates>({
    boligpris: "",
    egenkapital: "",
    gjeld: "",
    inntekt: "",
  });

  const [innvilgetLan, setInnvilgetLan] = useState<number>(0);
  const [lanebehov, setLanebehov] = useState<number>(0);


  // Use this function to handle updates from child components
  const getAllValues = (updatedState: AllInputStates) => {
    setAllInputValues(updatedState); // Schedule the state update
    updateCalculations(updatedState); // Immediately use the updated state for calculations
  };

  // Directly calculate new values using the updated state
  const updateCalculations = (updatedState: AllInputStates) => {
    const newInnvilgetLan = CalculateInnvilgetLan({
      gjeld: Number(updatedState.gjeld),
      inntekt: Number(updatedState.inntekt),
    });
    setInnvilgetLan(newInnvilgetLan);

    const newLanebehov = CalculateLanebehov({
      boligpris: Number(updatedState.boligpris),
      egenkapital: Number(updatedState.egenkapital),
    });
    setLanebehov(newLanebehov);
  };


  return (
    <div className="App">
      <CalculationInputsView onChange={getAllValues} />
      <ResultsView
        lanebehov={lanebehov < 0 ? 0 : lanebehov}
        innvilgetLan={innvilgetLan < 0 ? 0 : innvilgetLan}
      />
    </div>
  );
}

export default App;
