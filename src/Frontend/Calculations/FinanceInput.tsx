import styles from "../Design/SCSS/Inputs.module.scss";
import { useState } from "react";
import { Illustration, ComboInput, LoanInfo, Logo } from "./index";
import textContent from "../Content/textContent.json"
import { userLocale } from "../Content/languageUtil"

export interface FinancialDetailsType {
  propertyPrice: number;
  equity: number;
  debt: number;
  income: number;
}

function FinanceInputs({
  onChange,
}: {
  onChange: (updatedStates: FinancialDetailsType) => void;
}) {
  //  a single state object for all financial details ensures the entire updated state is passed back to App.tsx
  const [financialDetails, setFinancialDetails] =
    useState<FinancialDetailsType>({
      propertyPrice: 0,
      equity: 0,
      debt: 0,
      income: 0,
    });

  const handleInputChange = (
    name: keyof FinancialDetailsType,
    value: number
  ) => {
    const updatedDetails = { ...financialDetails, [name]: value };
    setFinancialDetails(updatedDetails);
    onChange(updatedDetails); // Pass the complete, updated state back to the App
  };



  const {
    loanInfo: { illustrationText, heading, subHeading, paragraph, instructions },
    financeInput: {
      sliderInputs: {
        propertyPrice, equity, debt, income }
    }
  } = textContent

  const sliderInputs = [
    { name: propertyPrice[userLocale], title: propertyPrice[userLocale], placeholder: propertyPrice[userLocale] },
    { name: equity[userLocale], title: equity[userLocale], placeholder: equity[userLocale] },
    { name: debt[userLocale], title: debt[userLocale], placeholder: debt[userLocale] },
    { name: income[userLocale], title: income[userLocale], placeholder: income[userLocale] },
  ];


  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <LoanInfo
          imageElement={
            <Illustration alt={illustrationText[userLocale]} src={Logo} />
          }
          title={heading[userLocale]}
          subtitle={subHeading[userLocale]}
          paragraph={paragraph[userLocale]}
          instructions={instructions[userLocale]}
        />
        {sliderInputs.map(({ name, title, placeholder }) => (
          <ComboInput
            key={name}
            title={title}
            placeholder={placeholder}
            onChangeInputValue={(value) =>
              handleInputChange(name as keyof FinancialDetailsType, value)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default FinanceInputs;
