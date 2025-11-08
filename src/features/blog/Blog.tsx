import Illustration from "../home/loanInfo/Illustration";
import styles from "./blog.module.scss";
import Advisor from "../../assets/images/advisor.jpg";

function Blog() {
  return (
    <div className={styles.wrapper}>
    
      <div className={styles.innerWrapper}>
        <h1 className="mb-0">Tips og råd om boliglån</h1>
        <p className={styles.lead}>
          Få innsikt, gode råd og nyttige tips om hvordan du kan planlegge økonomien og ta smarte valg før, under og etter boligkjøpet.
        </p>
        <Illustration src={Advisor} alt="Bilde av rådgiver"></Illustration>
        <h2 className="mt-16">
          Slik planlegger du økonomien før boligkjøp
        </h2>
        <p>
          Å kjøpe bolig er en av de største investeringene du gjør i livet. Det er viktig å ha god oversikt over egen økonomi, forstå lånebetingelser og vite hvilke kostnader som følger med boligkjøpet. Våre rådgivere hjelper deg med å finne de beste løsningene for din situasjon.
        </p>
      </div>
    </div>
  );
}

export default Blog;
