import styles from "../design/style/Result.module.scss";

interface ResultProps {
  heading: string;
  amount: number;
}


function Result({ heading, amount }: ResultProps) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>{heading} </h1>
      <h2 className={amount < 0 ? styles.negativeAmount : styles.amount}>
        {new Intl.NumberFormat("no-NO").format(amount)} kr
      </h2>
    </section>
  );
}

export default Result;
