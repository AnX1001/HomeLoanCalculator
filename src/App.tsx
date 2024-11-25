import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import '../src/firebase/firebase';


import FinanceInputs, {
  FinancialDetailsType,
} from "./features/home/calculations/FinanceInput";

import {
  CalculateEligibleLoan,
  CalculateLoanNeed,
} from "./features/home/calculations/Formulas";

import Summary from "./features/home/summary/Summary";

import Blog from "./features/blog/Blog";
import MinSide from "./features/minSide/MinSide";

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
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <FinanceInputs onChange={getAllValues} />
                <Summary loanNeed={loanNeed} eligibleLoan={eligibleLoan} />
              </>
            }
          />
          <Route path="blog" element={<Blog />} />
          <Route path="minside" element={<MinSide />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
