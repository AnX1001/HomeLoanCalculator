import styles from "./stylingTextArticle.module.scss";

interface Props {
  h1Heading: string;
  h2Heading: string;
  paragraph: string;
}

function TextArticle({ h1Heading, h2Heading, paragraph }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1>{h1Heading}</h1>
      <slot></slot>
      <h2>{h2Heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default TextArticle;
