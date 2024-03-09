
import { useState } from "react";
import CalculationInputsView, {
  AllInputStates,
} from "./Components/CalculationInputsView/CalculationInputsView";
import "./Components/MainStyling/MainStyling.scss";
import ResultsView from "./Components/ResultsView/ResultsView";
import { CalculateEligibleLoan } from "./Components/SliderInput/CalculateEligibleLoan";
import { CalculateLoanNeed } from "./Components/SliderInput/CalculateLoanNeed";

function App() {
  const [loanInputs, setLoanInputs] = useState<AllInputStates>({
    propertyPrice: "",
    equity: "",
    debt: "",
    income: "",
  });

  const [eligibleLoan, setEligibleLoan] = useState<number>(0);
  const [loanNeed, setLoanNeed] = useState<number>(0);

  const getAllValues = (updatedState: AllInputStates) => {
    setLoanInputs(updatedState); // Schedule the state update
    updateLoanCalculations(updatedState); // Immediately use the updated state for calculations
  };


  const updateLoanCalculations = (updatedState: AllInputStates) => {
    const updatedEligibleLoan = CalculateEligibleLoan({
      debt: Number(updatedState.debt),
      income: Number(updatedState.income),
    });
    setEligibleLoan(updatedEligibleLoan);

    const updatedLoanNeed = CalculateLoanNeed({
      propertyPrice: Number(updatedState.propertyPrice),
      equity: Number(updatedState.equity),
    });
    setLoanNeed(updatedLoanNeed);
  };


  return (
    <div className="App">
      <CalculationInputsView onChange={getAllValues} />
      <ResultsView
        loanNeed={loanNeed}
        eligibleLoan={eligibleLoan}
      />
    </div>
  );
}

export default App;
