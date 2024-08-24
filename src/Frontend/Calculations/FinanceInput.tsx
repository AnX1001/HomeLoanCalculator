import styles from "../design/style/Inputs.module.scss";
import { useState } from "react";
import { Illustration, ComboInput, LoanInfo, Logo } from "./index";
import textContent from "../content/textContent.json";
import { userLocale } from "../content/languageUtil";

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



  const { loanInfo: { illustrationText, heading, subHeading, paragraph, instructions }, financeInput } = textContent;

  const sliderInputs = [
    { name: 'propertyPrice', title: financeInput.propertyPrice[userLocale], placeholder: financeInput.propertyPrice[userLocale] },
    { name: 'equity', title: financeInput.equity[userLocale], placeholder: financeInput.equity[userLocale] },
    { name: 'debt', title: financeInput.debt[userLocale], placeholder: financeInput.debt[userLocale] },
    { name: 'income', title: financeInput.income[userLocale], placeholder: financeInput.income[userLocale] },
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
            id={name}
            name={name}
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
