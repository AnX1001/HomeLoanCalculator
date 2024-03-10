import ProportionalImage from "../ProportionalImage/ProportionalImage";
import SliderInput from "../SliderInput/SliderInput";
import TextArticle from "../TextArticle/TextArticle";
import styles from "./StylingCalculationInputsView.module.scss";
import Logo from "./Logo.svg";
import { useState } from "react";


export interface FinancialDetailsType {
  propertyPrice: number;
  equity: number;
  debt: number;
  income: number;
}

function CalculationInputsView({
  onChange,
}: {
  onChange: (updatedStates: any) => void;
}) {

  //  a single state object for all financial details ensures the entire updated state is passed back to App.tsx
  const [financialDetails, setFinancialDetails] = useState<FinancialDetailsType>({
    propertyPrice: 0,
    equity: 0,
    debt: 0,
    income: 0,
  });

  const handleInputChange = (name: keyof FinancialDetailsType, value: number) => {
    const updatedDetails = { ...financialDetails, [name]: value };
    setFinancialDetails(updatedDetails);
    onChange(updatedDetails); // Pass the complete, updated state back to the App
  };

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
          onChangeInputValue={value => handleInputChange('propertyPrice', value)}
          placeholder="Boligpris"
          title={"Boligens pris"}
        />
        <SliderInput
          onChangeInputValue={value => handleInputChange('equity', value)}
          placeholder="Egenkapital"
          title={"Egenkapital"}
        />
        <SliderInput
          onChangeInputValue={value => handleInputChange('debt', value)}
          placeholder="Gjeld"
          title={"Gjeld"}
        />
        <SliderInput
          onChangeInputValue={value => handleInputChange('income', value)}
          placeholder="Årslønn brutto"
          title={"Årslønn brutto"}
        />
      </div>
    </div>
  );
}

export default CalculationInputsView;
