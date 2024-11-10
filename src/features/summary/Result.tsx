import styles from "./result.module.scss";

interface ResultProps {
  heading: string;
  amount: number;
  approvedLoan?: boolean;
}

function Result({ heading, amount, approvedLoan }: ResultProps) {
  
  const approvedLoanLabelText = amount > 1 ? new Intl.NumberFormat("no-NO").format(amount) + ` kr` : 0;

  const loanRequirementsText = amount > 1 ? new Intl.NumberFormat("no-NO").format(amount) + ` kr` : 0;
  return (
    <section className={styles.wrapper}> 
      <h2 className={styles.heading}>{heading} </h2>
      <h3 className={styles.amount}>
       {approvedLoan ? approvedLoanLabelText : loanRequirementsText}
      </h3> 
    </section>
  );
}

export default Result;
