import styles from './StylingCalculationResults.module.scss'

interface Props {
  smallHeading: string;
  calculationSum: number;
  SimpleParagraph?: React.ReactNode;
}

function CalculationResults({ smallHeading, calculationSum, SimpleParagraph }: Props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.smallHeading }>{smallHeading} </p>
            <p className={styles.largeHeading}>{calculationSum} kr</p>
        {SimpleParagraph}
        </div>

    )
}

export default CalculationResults
