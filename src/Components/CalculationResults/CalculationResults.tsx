import styles from './StylingCalculationResults.module.scss'

interface CalculationResultsProps {
    smallHeading: string;
    totalAmount: number;
    content?: React.ReactNode;
}

function CalculationResults({ smallHeading, totalAmount, content }: CalculationResultsProps) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{smallHeading} </p>
            <p className={styles.amount}>{totalAmount} kr</p>
            {content}
        </div>

    )
}

export default CalculationResults
