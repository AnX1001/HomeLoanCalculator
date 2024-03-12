import CalculationResults from "../CalculationResults/CalculationResults";
import styles from "./StylingResultsView.module.scss";
import SimpleParagraph from ".././SimpleParagraph/SimpleParagraph";


interface ResultsViewProps {
  loanNeed: number
  eligibleLoan: number
}

function ResultsView({ loanNeed, eligibleLoan }: ResultsViewProps) {
  //Todo: document this part: function ResultsView({lanebehovNumber}: {lanebehovNumber: string})

  return (
    <div className={styles.wrapper}>
      <CalculationResults
        smallHeading="Innvilget lån"
        totalAmount={eligibleLoan < 0 ? 0 : eligibleLoan}
      />
      <CalculationResults
        smallHeading="Ditt lånebehov"
        totalAmount={loanNeed < 0 ? 0 : loanNeed}
      />
      <SimpleParagraph smallerHeading="Husk at:" />
    </div>
  );
}

export default ResultsView;
