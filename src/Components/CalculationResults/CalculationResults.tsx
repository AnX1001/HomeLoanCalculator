import styles from './StylingCalculationResults.module.scss'

<<<<<<< HEAD
interface Props {
    heading: string;
    amount: number;
}

function CalculationResults({ heading, amount }: Props) {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.heading}>{heading} </h1>
            <p className={styles.amount}>{amount} kr</p>
        </section>
=======
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
>>>>>>> ec6acddad70ff26d812956dc6d9e880a26c266b9

    )
}

export default CalculationResults
