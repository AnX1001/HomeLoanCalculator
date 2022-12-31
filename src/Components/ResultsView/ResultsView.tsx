import CalculationResults from "../CalculationResults/CalculationResults";
import styles from "./StylingResultsView.module.scss";
import SimpleParagraph from ".././SimpleParagraph/SimpleParagraph"

function ResultsView() {
  return (
    <div className={styles.wrapper}>
      <CalculationResults smallHeading="Innvilget lån" largeHeading="99.0000" smallerHeading={"Husk at:"} />
      <CalculationResults smallHeading="Innvilget lån" largeHeading="99.0000" smallerHeading={"Husk at:"} />
      <SimpleParagraph smallerHeading="Husk at:" />
    </div>
  );
}

export default ResultsView;
