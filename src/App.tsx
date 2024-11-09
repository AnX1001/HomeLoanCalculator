import { useState } from 'react';
import FinanceInputs, {
  FinancialDetailsType,
} from './features/calculations/FinanceInput';

import {
  CalculateEligibleLoan,
  CalculateLoanNeed,
} from './features/calculations/Formulas';

import Summary from './features/summary/Summary';

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
      <main>
        <FinanceInputs onChange={getAllValues} />
      </main>
      <footer>
        <Summary loanNeed={loanNeed} eligibleLoan={eligibleLoan} />
      </footer>
    </div>
  );
}

export default App;
