import ProportionalImage from "../ProportionalImage/ProportionalImage";
import SliderInput from "../SliderInput/SliderInput";
import TextArticle from "../TextArticle/TextArticle";
import styles from "./StylingCalculationInputsView.module.scss";
import Logo from "./Logo.svg";
import { useState, useEffect } from "react";
/* the wrapper grows in height along with content. The width is always as large as window width. */

export interface AllInputStates {
  propertyPrice: string | number;
  equity: string | number;
  debt: string | number;
  income: string | number;
}

function CalculationInputsView({
  onChange,
}: {
  onChange: (updatedStates: any) => void;
}) {
  const [propertyPrice, setPropertyPrice] = useState<number | string>("");
  const [equity, setEquity] = useState<number | string>("");
  const [debt, setDebt] = useState<number | string>("");
  const [income, setIncome] = useState<number | string>("");

  const allinputStates: AllInputStates = {
    propertyPrice,
    equity,
    debt,
    income,
  };

  useEffect(() => {
    onChange(allinputStates);
  }, [propertyPrice, equity, income, debt]);

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
          onChangeInputValue={setPropertyPrice}
          placeholder="Boligpris"
          title={"Boligens pris"}
        />
        <SliderInput
          onChangeInputValue={setEquity}
          placeholder="Egenkapital"
          title={"Egenkapital"}
        />
        <SliderInput
          onChangeInputValue={setDebt}
          placeholder="Gjeld"
          title={"Gjeld"}
        />
        <SliderInput
          onChangeInputValue={setIncome}
          placeholder="Årslønn brutto"
          title={"Årslønn brutto"}
        />
      </div>
    </div>
  );
}

export default CalculationInputsView;
