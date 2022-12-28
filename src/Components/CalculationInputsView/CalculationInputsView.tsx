import styles from "./StylingCalculationInputsView.module.scss";

/* the wrapper grows in height along with content. The width is always as large as window width. */

function CalculationInputsView() {
  return (
    <div className={styles.wrapper}>
      <p>calculationinputsview render</p>
    </div>
  );
}

export default CalculationInputsView;
