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

  const sliderInputContent = textContent.financeInput.sliderInputs;

  const sliderInputs = [
    { name: sliderInputContent.propertyPrice[userLocale], title: sliderInputContent.propertyPrice[userLocale], placeholder: sliderInputContent.propertyPrice[userLocale] },
    { name: sliderInputContent.equity[userLocale], title: sliderInputContent.equity[userLocale], placeholder: sliderInputContent.equity[userLocale] },
    { name: sliderInputContent.debt[userLocale], title: sliderInputContent.debt[userLocale], placeholder: sliderInputContent.debt[userLocale] },
    { name: sliderInputContent.income[userLocale], title: sliderInputContent.income[userLocale], placeholder: sliderInputContent.income[userLocale] },
  ];

  const loanInfoContent = textContent.loanInfo;

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <LoanInfo
          imageElement={
            <Illustration alt={loanInfoContent.illustrationText[userLocale]} src={Logo} />
          }
          title={loanInfoContent.heading[userLocale]}
          subtitle={loanInfoContent.subHeading[userLocale]}
          paragraph={loanInfoContent.paragraph[userLocale]}
          instructions={loanInfoContent.instructions[userLocale]}
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
