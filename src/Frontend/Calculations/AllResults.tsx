import Result from "./Result";
import styles from "../Design/SCSS/AllResults.module.scss";
import { EquitySection } from "./index";
import textContent from "../Content/textContent.json"
import { userLocale } from "../Content/languageUtil"

interface ResultsViewProps {
  loanNeed: number;
  eligibleLoan: number;
}


console.log(navigator.language)
function AllResults({ loanNeed, eligibleLoan }: ResultsViewProps) {


  return (
    <div className={styles.wrapper}>
      <Result heading={textContent.result.heading.approvedLoan[userLocale]} amount={eligibleLoan} />
      <Result heading={textContent.result.heading.loanRequirements[userLocale]} amount={loanNeed} />
      <EquitySection heading={textContent.equity.heading[userLocale]}>
        <p>
          {textContent.equity.equityRequirement[userLocale]}

        </p>
        <p>
          {textContent.equity.additionalCosts[userLocale]}

        </p>
      </EquitySection>
    </div>
  );
}

export default AllResults;
