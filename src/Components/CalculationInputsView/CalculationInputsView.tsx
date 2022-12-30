import SliderInput from "../SliderInput/SliderInput";
import TextArticle from "../TextArticle/TextArticle";
import styles from "./StylingCalculationInputsView.module.scss";

/* the wrapper grows in height along with content. The width is always as large as window width. */

function CalculationInputsView() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <TextArticle
          imageElement={<p>inject imageElement here</p>}
          h1Heading="Boliglånskalkulatoren"
          h2Heading="Hvor mye kan du få i boliglån"
          paragraph="Dette er avhengig av mange variabler. Men en vanlig kalkulasjon vil ta i betraktning din årsinntekt, gjeld, egenkapital og boligens totalpris."
        />
        <SliderInput placeholder="Boligpris" title={"Boligens pris"} />
        <SliderInput placeholder="Egenkapital" title={"Egenkapital"} />
        <SliderInput placeholder="Gjeld" title={"Gjeld"} />
      </div>
    </div>
  );
}

export default CalculationInputsView;
