import { useState } from "react";
import {
  CalculationInputsView,
  AllResults,
  CalculateLoanNeed,
  CalculateEligibleLoan,
  FinancialDetailsType,
} from "./AppIndex";
import "./Frontend/Design/SCSS/Main.scss";

function App() {
  // eslint-disable-next-line
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
      <AllResults loanNeed={loanNeed} eligibleLoan={eligibleLoan} />
    </div>
  );
}

export default App;
