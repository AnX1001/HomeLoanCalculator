import { useState, useEffect } from "react";
import CalculationInputsView, {
  AllInputStates,
} from "./Components/CalculationInputsView/CalculationInputsView";
import "./Components/MainStyling/MainStyling.scss";
import ResultsView from "./Components/ResultsView/ResultsView";
import { CalculateInnvilgetLan } from "./Components/SliderInput/CalculateInnvilgetLan";
import { CalculateLanebehov } from "./Components/SliderInput/CalculateLanebehov";

function App() {
  const [allInputValues, setAllInnputValues] = useState<AllInputStates>({
    boligpris: "",
    egenkapital: "",
    gjeld: "",
    inntekt: "",
  });

  const [innvilgetLan, setInnvilgetLan] = useState<number>(0);
  const [lanebehov, setLanebehov] = useState<number>(0);

  // getAllvalues that is retrieved from the child components state
  const getAllValues = (updatedState: any) => {
    setAllInnputValues(updatedState);
    console.log(allInputValues);
  };

  const getUpdateInnvilgetLan = () => {
    const newInnvilgetLan = CalculateInnvilgetLan({
      gjeld: Number(allInputValues.gjeld),
      inntekt: Number(allInputValues.inntekt),
    });

    setInnvilgetLan(newInnvilgetLan);
  };

  const getUpdatedLanebehov = () => {
    const newLanebehov = CalculateLanebehov({
      boligpris: Number(allInputValues.boligpris),
      egenkapital: Number(allInputValues.egenkapital),
    });

    setLanebehov(newLanebehov);
  };

  useEffect(() => {
    getUpdateInnvilgetLan();
    getUpdatedLanebehov();
  }, [allInputValues]);


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
