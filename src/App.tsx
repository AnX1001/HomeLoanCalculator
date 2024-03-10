
import { useState } from "react";
import CalculationInputsView, {
  FinancialDetailsType,
} from "./Components/CalculationInputsView/CalculationInputsView";
import "./Components/MainStyling/MainStyling.scss";
import ResultsView from "./Components/ResultsView/ResultsView";
import { CalculateEligibleLoan } from "./Components/SliderInput/CalculateEligibleLoan";
import { CalculateLoanNeed } from "./Components/SliderInput/CalculateLoanNeed";

function App() {
  const [loanInputs, setLoanInputs] = useState<FinancialDetailsType>({
    propertyPrice: 0,
    equity: 0,
    debt: 0,
    income: 0,
  });

  const [eligibleLoan, setEligibleLoan] = useState<number>(0);
  const [loanNeed, setLoanNeed] = useState<number>(0);

  const getAllValues = (updatedState: FinancialDetailsType) => {
    setLoanInputs(updatedState); // Schedule the state update
    updateLoanCalculations(updatedState); // Immediately use the updated state for calculations
  };


  const updateLoanCalculations = (updatedState: FinancialDetailsType) => {
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
