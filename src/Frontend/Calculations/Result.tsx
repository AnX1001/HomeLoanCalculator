import styles from "../Design/SCSS/Result.module.scss";

interface Props {
  heading: string;
  amount: number;
}

function Result({ heading, amount }: Props) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>{heading} </h1>
      <p className={amount < 0 ? styles.negativeAmount : styles.amount}>
        {new Intl.NumberFormat("no-NO").format(amount)} kr
      </p>
    </section>
  );
}

export default Result;
