import styles from "../design/style/Illustration.module.scss";

interface IllustrationProps {
  src: string;
  alt: string;
}

function Illustration({ alt, src }: IllustrationProps) {
  return <img className={styles.image} data-testid="image" alt={alt} src={src} />;
}

export default Illustration;
