import Illustration from "../home/loanInfo/Illustration";
import CurrencyInfo from "./Currencyinfo";

import Finance from "../../assets/images/finance.svg";
import styles from "./rates.module.scss";
import CentralBankInterestRate from "./CentralBankInterestRate";

function Rates() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.ratesInfoWrapper}>
        <CurrencyInfo /> <CentralBankInterestRate />
      </section>

      <p className={styles.ratesText}>
        Valutakurs og styringsrente hentes fra Norges Banks API.
      </p>

      <div className={styles.innerWrapper}>
        <h1>Valuta Rente tittel ipsum, dolor sit amet</h1>
        <Illustration
          src={Finance}
          alt="Bilde av regnskapsfører"
        ></Illustration>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit error facere ratione, animi odio delectus.
        </h2>
        <p>
          Paragrahp Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum nemo molestias rem culpa excepturi asperiores pariatur ab illum
          adipisci facilis molestiae distinctio ad in officia, tenetur
          reprehenderit, dolores non aut.e
        </p>
      </div>
    </div>
  );
}

export default Rates;
