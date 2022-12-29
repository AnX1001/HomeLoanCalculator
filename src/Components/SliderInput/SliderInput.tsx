import { useState } from "react";
import styles from "./stylingSliderInput.module.scss";
interface Props {
  title: string;
  inputfieldPlaceholder: string;
}

function SliderInput({ title, inputfieldPlaceholder }: Props) {
  const [value, setValue] = useState<number | string>("");

  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className={styles.inputGroup}>
        <label>
          <h3 className={styles.h3}>{title}</h3>
          <input
            name="boligpris"
            className={styles.inputNumber}
            placeholder={inputfieldPlaceholder}
            type="number"
            min="0"
            id="boligpris"
            value={parseInt(value.toString()) ? value : ""}
            onChange={handleOnChange}
          />
        </label>

        <input
          aria-label="velg sum"
          className={styles.inputSlider}
          type="range"
          min="0"
          max="100000000"
          step="1000"
          onChange={handleOnChange}
        />
      </div>
    </>
  );
}
export default SliderInput;
