import styles from './StylingCalculationResults.module.scss'

interface Props {
  smallHeading: string;
  largeHeading: string | number;
  smallerHeading: string;
  SimpleParagraph?: React.ReactNode;
}

function CalculationResults({ smallHeading, largeHeading, SimpleParagraph }: Props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.smallHeading }>{smallHeading} </p>
            <p className={styles.largeHeading}>{largeHeading} kr</p>
        {SimpleParagraph}
        </div>

    )
}

export default CalculationResults
