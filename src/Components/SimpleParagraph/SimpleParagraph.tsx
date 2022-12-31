import styles from "./StylingSimpleParagraph.module.scss"

interface Props {
    smallerHeading: string
}

function SimpleParagraph({ smallerHeading }: Props) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.smallerHeading}>{smallerHeading}</p>
            <p>15% egenkapital er et krav for boliglån. En annen mulighet er at familie stiller som kausjonist. Husk å ta med omkostninger i utredningen. Størrelsen på omkostninger vil være avhengig av type bolig eller eiendom. </p>
        </div>
    )
}

export default SimpleParagraph