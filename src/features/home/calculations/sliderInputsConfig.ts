import { userLocale } from "../../../utils/languageUtil";
import textContent from "../../../mortageContent/mortageContent.json";

const { financeInput } = textContent;

export const sliderInputs = [
  {
    name: "propertyPrice",
    title: financeInput.propertyPrice[userLocale],
    placeholder: financeInput.propertyPrice[userLocale],
  },
  {
    name: "equity",
    title: financeInput.equity[userLocale],
    placeholder: financeInput.equity[userLocale],
  },
  {
    name: "debt",
    title: financeInput.debt[userLocale],
    placeholder: financeInput.debt[userLocale],
  },
  {
    name: "income",
    title: financeInput.income[userLocale],
    placeholder: financeInput.income[userLocale],
  },
];
