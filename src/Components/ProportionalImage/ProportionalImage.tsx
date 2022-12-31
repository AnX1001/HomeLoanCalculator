interface Props {
  src: string;
  alt: string;
}

function ProportionalImage({ alt, src }: Props) {
  return (
    <>
      <img data-testid="image" alt={alt} src={src} />
    </>
  );
}

export default ProportionalImage;
