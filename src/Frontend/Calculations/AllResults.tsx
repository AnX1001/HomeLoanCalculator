import Result from "./Result";
import styles from "../Design/SCSS/AllResults.module.scss";
import { EquitySection } from "./index";

interface ResultsViewProps {
  loanNeed: number;
  eligibleLoan: number;
}

function AllResults({ loanNeed, eligibleLoan }: ResultsViewProps) {
  //Todo: document this part: function ResultsView({lanebehovNumber}: {lanebehovNumber: string})

  return (
    <div className={styles.wrapper}>
      <Result heading="Innvilget lån" amount={eligibleLoan} />
      <Result heading="Ditt lånebehov" amount={loanNeed} />
      <EquitySection heading="Egenkapital krav" />
    </div>
  );
}

export default AllResults;
