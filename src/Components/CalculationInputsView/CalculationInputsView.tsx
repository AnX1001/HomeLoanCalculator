import ProportionalImage from "../ProportionalImage/ProportionalImage";
import SliderInput from "../SliderInput/SliderInput";
import TextArticle from "../TextArticle/TextArticle";
import styles from "./StylingCalculationInputsView.module.scss";
import Logo from "./Logo.svg";
import { useState, useEffect } from "react";
/* the wrapper grows in height along with content. The width is always as large as window width. */

interface CalculaterInput {
  boligpris: number | null;
  egenkapital: number | null;
  gjeld: number | null;
  inntekt: number | null;
}

function CalculationInputsView() {
  const [boligpris, setBoligPris] = useState<number | string>("");
  const [egenkapital, setEgenkapital] = useState<number | string>("");
  const [gjeld, setGjeld] = useState<number | string>("");
  const [inntekt, setInntekt] = useState<number | string>("");

  useEffect(() => {
    console.log("running calculation");
  }, [boligpris, egenkapital, gjeld, inntekt]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <TextArticle
          imageElement={
            <ProportionalImage alt="Bilde av sparegris" src={Logo} />
          }
          h1Heading="Boliglånskalkulatoren"
          h2Heading="Hvor mye kan du få i boliglån"
          paragraph="Dette er avhengig av mange variabler. Men en vanlig kalkulasjon vil ta i betraktning din årsinntekt, gjeld, egenkapital og boligens totalpris."
        />
        <SliderInput
          onChangeInputValue={setBoligPris}
          placeholder="Boligpris"
          title={"Boligens pris"}
        />
        <SliderInput
          onChangeInputValue={setEgenkapital}
          placeholder="Egenkapital"
          title={"Egenkapital"}
        />
        <SliderInput
          onChangeInputValue={setGjeld}
          placeholder="Gjeld"
          title={"Gjeld"}
        />
        <SliderInput
          onChangeInputValue={setInntekt}
          placeholder="Årslønn brutto"
          title={"Årslønn brutto"}
        />
      </div>
    </div>
  );
}

export default CalculationInputsView;
