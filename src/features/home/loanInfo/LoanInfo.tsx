import styles from './loanInfo.module.scss';

interface LoanInfoProps {
  title: string;
  subtitle: string;
  paragraph: string;
  instructions: string;
  imageElement?: React.ReactNode;
}

function LoanInfo({
  title,
  subtitle,
  paragraph,
  instructions,
  imageElement,
}: LoanInfoProps) {
  return (
    <>
      <h1 className={styles.headingTitle}>{title}</h1>
      <p className={styles.lead}>Regn ut drømmeboligen – før du flytter inn</p>
      {imageElement}
      <h2 className={styles.subHeading}>{subtitle}</h2>
      <p>{paragraph}</p>
      <p>{instructions}</p>
    </>
  );
}

export default LoanInfo;
