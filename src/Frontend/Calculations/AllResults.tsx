import Result from "./Result";
import styles from "../Design/SCSS/AllResults.module.scss";
import { EquitySection } from "./index";
import textContent from "../Content/textContent.json";
import { userLocale } from "../Content/languageUtil";

interface ResultsViewProps {
  loanNeed: number;
  eligibleLoan: number;
}

const {
  equity: { equityRequirement, heading, additionalCosts },
  result: { heading: {
    approvedLoan, loanRequirements }
  }
} = textContent;


function AllResults({ loanNeed, eligibleLoan }: ResultsViewProps) {


  return (
    <div className={styles.wrapper}>
      <Result heading={approvedLoan[userLocale]} amount={eligibleLoan} />
      <Result heading={loanRequirements[userLocale]} amount={loanNeed} />
      <EquitySection heading={heading[userLocale]}>
        <p>{equityRequirement[userLocale]}</p>
        <p>{additionalCosts[userLocale]}</p>
      </EquitySection>
    </div>
  );
}

export default AllResults;
