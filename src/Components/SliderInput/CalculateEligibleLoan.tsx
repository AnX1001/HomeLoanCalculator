interface Props {
  debt: number;
  income: number;
}

export function CalculateEligibleLoan({ debt, income }: Props) {
  return income * 5 - debt;

}


