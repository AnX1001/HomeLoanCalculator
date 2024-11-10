import { useState } from 'react';
import styles from './comboInput.module.scss';
import { useSliderBackground } from '../../utils/sliderUtils';
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

  const textInputId = `${id}-text`;
  const rangeInputId = `${id}-range`;
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    //to ensure valid formatting with intl.numberformat
    const rawValue = event.target.value.replace(/\s/g, '').replace(/,/g, '');  

    if (!isNaN(Number(rawValue))) {
      const numericValue = Number(rawValue);
      setValue(numericValue); 
      onChangeInputValue(numericValue);  
    }  else {
      setValue(0);
  
    }
  };

  const sliderRef = useSliderBackground({
    color: '#376174',
    backgroundColor: '#d3d3d3',
  });

  return (
    <div className={styles.inputGroup}>
      <label className={styles.labelInputGroup}>
        <h3 className={styles.h3}>{title}</h3>
        <input
          className={styles.inputNumber}
          placeholder={placeholder}
          type="text"
          min="0"
          id={textInputId}
          name={name}
          value={value ? new Intl.NumberFormat("no-NO").format(value) : ''}
          onChange={handleOnChange}
        />
      </label>

      <input
        ref={sliderRef}
        id={rangeInputId}
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
