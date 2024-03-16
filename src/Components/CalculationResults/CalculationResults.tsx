import styles from "./StylingCalculationResults.module.scss";

interface Props {
  heading: string;
  amount: number;
}



function CalculationResults({ heading, amount }: Props) {
  const formattedAmount = new Intl.NumberFormat('no-NO').format(amount);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>{heading} </h1>
      <p className={styles.amount}>{formattedAmount} kr</p>
    </section>
  );
}

export default CalculationResults;
