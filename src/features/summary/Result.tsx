import styles from "./result.module.scss";

interface ResultProps {
  heading: string;
  amount: number;
}

function Result({ heading, amount }: ResultProps) {
  return (
    <section className={styles.wrapper}> 
      <h2 className={styles.heading}>{heading} </h2>
      <h3 className={amount < 0 ? styles.negativeAmount : styles.amount}>
        {new Intl.NumberFormat("no-NO").format(amount)} kr
      </h3> 
    </section>
  );
}

export default Result;
