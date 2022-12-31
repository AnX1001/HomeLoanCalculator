import styles from "./StylingProportionalImage.module.scss";

interface Props {
  src: string;
  alt: string;
}

function ProportionalImage({ alt, src }: Props) {
  return (
    <>
      <img className={styles.image} data-testid="image" alt={alt} src={src} />
    </>
  );
}

export default ProportionalImage;
