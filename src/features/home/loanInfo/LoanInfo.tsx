

interface LoanInfoProps {
  title: string;
  subtitle: string;
  paragraph: string;
  instructions: string;
  imageElement?: React.ReactNode;
}

function LoanInfo({
  title,
  subtitle,
  paragraph,
  instructions,
  imageElement,
}: LoanInfoProps) {
  return (
    <>
      <h1>{title}</h1>
      {imageElement}
      <h2>{subtitle}</h2>
      <p>{paragraph}</p>
      <p>{instructions}</p>
    </>
  );
}

export default LoanInfo;
