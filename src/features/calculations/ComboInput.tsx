import { useState } from "react";
import styles from "../design/style/ComboInput.module.scss";
interface CompoInputProps {
  title: string;
  id: string;
  name: string;
  placeholder: string;
  onChangeInputValue: (value: number) => void;
}

function ComboInput({
  id,
  name,
  title,
  placeholder,
  onChangeInputValue,
}: CompoInputProps) {
  const [value, setValue] = useState<number>(0);

  /* event.target.value is set with the slider thumb or directly in the inputfield  */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
    onChangeInputValue(Number(event.target.value));
  };

  return (
    <div className={styles.inputGroup}>
      <label className={styles.labelInputGroup}>
        <h3 className={styles.h3}>{title}</h3>
        <input
          className={styles.inputNumber}
          placeholder={placeholder}
          type="text"
          min="0"
          id={id}
          name={name}
          value={value ? value : ""}
          onChange={handleOnChange}
        />
      </label>

      <input
        id={id}
        name={name}
        aria-label="velg sum"
        className={styles.inputSlider}
        type="range"
        min="1"
        max="10000000" // max range
        step="100"
        onChange={handleOnChange}
      />
    </div>
  );
}
export default ComboInput;
