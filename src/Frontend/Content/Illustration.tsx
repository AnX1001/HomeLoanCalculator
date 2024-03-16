import styles from "../Design/SCSS/Illustration.module.scss";

interface Props {
  src: string;
  alt: string;
}

function Illustration({ alt, src }: Props) {
  return (
    <>
      <img className={styles.image} data-testid="image" alt={alt} src={src} />
    </>
  );
}

export default Illustration;
