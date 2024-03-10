import styles from "./StylingCalculationInputsView.module.scss"
import { useState } from "react";
import { ProportionalImage, SliderInput, TextArticle, Logo } from './index';

export interface FinancialDetailsType {
  propertyPrice: number;
  equity: number;
  debt: number;
  income: number;
}

function CalculationInputsView({
  onChange,
}: {
  onChange: (updatedStates: FinancialDetailsType) => void;
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

  const sliderInputs = [
    { name: 'propertyPrice', title: 'Boligens pris', placeholder: 'Boligpris' },
    { name: 'equity', title: 'Egenkapital', placeholder: 'Egenkapital' },
    { name: 'debt', title: 'Gjeld', placeholder: 'Gjeld' },
    { name: 'income', title: 'Årslønn brutto', placeholder: 'Årslønn brutto' },
  ]

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

        {sliderInputs.map(({ name, title, placeholder }) => (
          <SliderInput key={name} title={title} placeholder={placeholder} onChangeInputValue={value => handleInputChange(name as keyof FinancialDetailsType, value)} />
        ))}
      </div>
    </div>
  );
}

export default CalculationInputsView;
