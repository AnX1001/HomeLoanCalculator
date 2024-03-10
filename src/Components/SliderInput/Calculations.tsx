

export function CalculateEligibleLoan({ debt, income } : {debt: number, income: number}) {

  return income * 5 - debt;
}


export function CalculateLoanNeed({ propertyPrice, equity }: {propertyPrice: number, equity: number}) {

  return propertyPrice - equity;
}



