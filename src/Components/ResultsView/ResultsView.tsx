import CalculationResults from "../CalculationResults/CalculationResults";
import styles from "./StylingResultsView.module.scss";
import SimpleParagraph from ".././SimpleParagraph/SimpleParagraph";

interface ResultsViewProps {
  lanebehov: string | number;
  innvilgetLan: string | number;
}

function ResultsView({ lanebehov, innvilgetLan }: ResultsViewProps) {
  //Todo: document this part: function ResultsView({lanebehovNumber}: {lanebehovNumber: string})

  return (
    <div className={styles.wrapper}>
      <CalculationResults
        smallHeading="Innvilget lån"
        largeHeading={innvilgetLan}
        smallerHeading={"Husk at:"}
      />
      <CalculationResults
        smallHeading="Ditt lånebehov"
        largeHeading={lanebehov}
        smallerHeading={"Husk at:"}
      />
      <SimpleParagraph smallerHeading="Husk at:" />
    </div>
  );
}

export default ResultsView;
