import styles from "../design/style/EquitySection.module.scss";

interface EquitySectionProps {
  heading: string;
  children: React.ReactNode
}

function EquitySection({ heading, children }: EquitySectionProps) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      {children}
    </section>
  );
}

export default EquitySection;
