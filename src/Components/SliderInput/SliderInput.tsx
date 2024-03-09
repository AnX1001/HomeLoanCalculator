import { useState } from "react";
import styles from "./stylingSliderInput.module.scss";
interface Props {
  title: string;
  placeholder: string;
  onChangeInputValue: (value: string) => void;
}



function SliderInput({ title, placeholder, onChangeInputValue }: Props) {
  const [value, setValue] = useState<number | string | null>(null);

  /* event.target.value is set with the slider thumb or directly in the inputfield  */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeInputValue(event.target.value);
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
            value={value ? value : ""}
            onChange={handleOnChange}
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
