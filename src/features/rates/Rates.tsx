import Illustration from "../home/loanInfo/Illustration";
import CurrencyInfo from "./Currencyinfo";
import Finance from "../../assets/images/cNumbers.jpg";
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
  <h1 className="mb-0">Valutakurser og styringsrente</h1>
        <p className={styles.lead}>
          Følg med på valutakursene og Norges Banks styringsrente
        </p>
        <Illustration
          src={Finance}
          alt="Bilde av valutakurser"
        ></Illustration>
        <h2 className="mt-16">Styringsrenten</h2>
        <p>
          Her finner du oppdaterte valutakurser og den gjeldende styringsrenten
          fra Norges Bank. Dette gir deg bedre oversikt når du skal vurdere lån,
          investeringer eller reiser til utlandet. Endringer i styringsrenten
          påvirker både boliglån og sparerente.
        </p>
      </div>
    </div>
  );
}

export default Rates;
