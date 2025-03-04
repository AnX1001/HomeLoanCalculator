import Result from "./Result";
import styles from "./summary.module.scss";

import textContent from "../../../mortageContent/mortageContent.json";
import { userLocale } from "../../../utils/languageUtil";
import EquitySection from "./EquitySection";

interface ResultsViewProps {
  loanNeed: number;
  eligibleLoan: number;
}

const {
  equity: { equityRequirement, heading, additionalCosts },
  result: {
    heading: { approvedLoan, loanRequirements },
  },
} = textContent;

function Summary({ loanNeed, eligibleLoan }: ResultsViewProps) {
  return (
    <div className={styles.wrapper}>
      <Result
        testId={"loan-status-heading"}
        approvedLoan
        heading={approvedLoan[userLocale]}
        amount={eligibleLoan}
      />
      <Result heading={loanRequirements[userLocale]} amount={loanNeed} />
      <EquitySection heading={heading[userLocale]}>
        <p>{equityRequirement[userLocale]}</p>
        <p>{additionalCosts[userLocale]}</p>
      </EquitySection>
    </div>
  );
}

export default Summary;
