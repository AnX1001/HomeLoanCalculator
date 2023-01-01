interface Props {
  boligpris: number;
  egenkapital: number;
}

export function CalculateLanebehov({ boligpris, egenkapital }: Props) {
  return boligpris - egenkapital;
}
