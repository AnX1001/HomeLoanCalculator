interface Props {
  gjeld: number;
  inntekt: number;
}

export function CalculateInnvilgetLan({ gjeld, inntekt }: Props) {
  return inntekt * 5 - gjeld;
}
