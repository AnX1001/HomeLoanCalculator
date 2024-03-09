interface Props {
  propertyPrice: number;
  equity: number;
}

export function CalculateLoanNeed({ propertyPrice, equity }: Props) {
  return propertyPrice - equity;
}
