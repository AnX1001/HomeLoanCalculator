import styles from "../Design/SCSS/EquitySection.module.scss";

interface Props {
  heading: string;
}

function EquitySection({ heading }: Props) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      <p>
        15% egenkapital er et krav for boliglån. En annen mulighet er at familie
        stiller som kausjonist.
      </p>
      <p>
        Husk å ta med omkostninger i utredningen. Størrelsen på omkostninger vil
        være avhengig av type bolig eller eiendom.
      </p>
    </section>
  );
}

export default EquitySection;
