import { useState } from "react";
import styles from "./stylingSliderInput.module.scss";
interface Props {
  title: string;
  placeholder: string;
  onChangeInputValue: (value: string) => void;
}

/* Ensures that setValue only stores numeric values  */
const isNumberOrNaN = (value: any) => Number(value);

function SliderInput({ title, placeholder, onChangeInputValue }: Props) {
  const [value, setValue] = useState<number | null>(null);

  /* event.target.value is set with the slider thumb or directly in the inputfield  */
  const handleOnChange = (event: any) => {
    if (!Number(event.target.value)) return;
    setValue(event.target.value);
    onChangeInputValue(event.target.value);
  };

  const handleOnKeyDown = (event: any) => {
    if (event.key === "Backspace") {
      setValue(event.target.value.slice(0, -1));
    }
  };

  return (
    <>
      <div className={styles.inputGroup}>
        <label>
          <h3 className={styles.h3}>{title}</h3>
          <input
            name="boligpris"
            className={styles.inputNumber}
            placeholder={placeholder}
            type="text"
            min="0"
            id="boligpris"
            value={value ? value.toString() : ""}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
          />
        </label>

        <input
          aria-label="velg sum"
          className={styles.inputSlider}
          type="range"
          min="1"
          max="1000000" // max range
          step="100"
          onChange={handleOnChange}
        />
      </div>
    </>
  );
}
export default SliderInput;
