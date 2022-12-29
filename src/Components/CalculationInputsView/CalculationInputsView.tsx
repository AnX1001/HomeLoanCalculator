import SliderInput from "../SliderInput/SliderInput";
import styles from "./StylingCalculationInputsView.module.scss";

/* the wrapper grows in height along with content. The width is always as large as window width. */

function CalculationInputsView() {
  return (
    <div className={styles.wrapper}>
      <SliderInput placeholder="Boligpris" title={"Boligens pris"} />
      <SliderInput placeholder="Egenkapital" title={"Egenkapital"} />
      <SliderInput placeholder="Gjeld" title={"Gjeld"} />
    </div>
  );
}

export default CalculationInputsView;
