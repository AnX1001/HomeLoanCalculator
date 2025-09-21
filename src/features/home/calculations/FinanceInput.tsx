import { userLocale } from "../../../utils/languageUtil";
import LoanInfo from "../loanInfo/LoanInfo";
import styles from "./inputs.module.scss";
import { useState } from "react";
import ComboInput from "./ComboInput";
import textContent from "../../../mortageContent/mortageContent.json";
import Logo from "../../../assets/images/Logo.svg";
import Illustration from "../loanInfo/Illustration";
import { sliderInputs } from "./sliderInputsConfig";
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
    value: number,
  ) => {
    const updatedDetails = { ...financialDetails, [name]: value };
    setFinancialDetails(updatedDetails);
    onChange(updatedDetails); // Pass the complete, updated state back to the App
  };

  const {
    loanInfo: {
      illustrationText,
      heading,
      subHeading,
      paragraph,
      instructions,
    },
  } = textContent;

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
