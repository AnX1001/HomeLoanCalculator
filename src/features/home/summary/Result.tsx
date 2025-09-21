import styles from "./result.module.scss";
import textContent from "../../../mortageContent/mortageContent.json";
import { userLocale } from "../../../utils/languageUtil";
interface ResultProps {
  heading: string;
  amount: number;
  approvedLoan?: boolean;
  testId?: string;
}

const {
  result: {
    subheading: { loanNotApproved, loanNotNecessary },
  },
} = textContent;

function Result({ heading, amount, approvedLoan, testId }: ResultProps) {
  const approvedLoanLabelText =
    amount > 1
      ? new Intl.NumberFormat("no-NO").format(amount) + ` kr`
      : loanNotApproved[userLocale];

  const loanRequirementsText =
    amount > 1
      ? new Intl.NumberFormat("no-NO").format(amount) + ` kr`
      : loanNotNecessary[userLocale];
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>{heading} </h2>
      <h3 data-testid={testId} className={styles.amount}>
        {approvedLoan ? approvedLoanLabelText : loanRequirementsText}
      </h3>
    </section>
  );
}

export default Result;
