import styles from "./equitySection.module.scss";

interface EquitySectionProps {
  heading: string;
  children: React.ReactNode;
}

function EquitySection({ heading, children }: EquitySectionProps) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </section>
  );
}

export default EquitySection;
