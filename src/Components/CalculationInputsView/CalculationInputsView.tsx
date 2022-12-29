import SliderInput from "../SliderInput/SliderInput";
import styles from "./StylingCalculationInputsView.module.scss";

/* the wrapper grows in height along with content. The width is always as large as window width. */

function CalculationInputsView() {
  return (
    <div className={styles.wrapper}>
      <SliderInput inputfieldPlaceholder="Boligpris" title={"Boligens pris"} />
      <SliderInput inputfieldPlaceholder="Egenkapital" title={"Egenkapital"} />
      <SliderInput inputfieldPlaceholder="Gjeld" title={"Gjeld"} />
    </div>
  );
}

export default CalculationInputsView;
