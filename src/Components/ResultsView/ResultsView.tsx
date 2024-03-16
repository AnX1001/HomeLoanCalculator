import CalculationResults from "../CalculationResults/CalculationResults";
import styles from "./StylingResultsView.module.scss";
import SectionWithHeading from "../SimpleParagraph/SectionWithHeading";

interface ResultsViewProps {
  loanNeed: number;
  eligibleLoan: number;
}

function ResultsView({ loanNeed, eligibleLoan }: ResultsViewProps) {
  //Todo: document this part: function ResultsView({lanebehovNumber}: {lanebehovNumber: string})

  return (
    <div className={styles.wrapper}>
      <CalculationResults heading="Innvilget lån" amount={eligibleLoan} />
      <CalculationResults heading="Ditt lånebehov" amount={loanNeed} />
      <SectionWithHeading heading="Egenkapital krav" />
    </div>
  );
}

export default ResultsView;
