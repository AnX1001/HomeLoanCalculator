interface Props {
  h1Heading: string;
  h2Heading: string;
  paragraph: string;
  imageElement?: React.ReactNode;
}

function BankArticle({ h1Heading, h2Heading, paragraph, imageElement }: Props) {
  return (
    <div>
      <h1>{h1Heading}</h1>
      {imageElement}
      <h2>{h2Heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default BankArticle;
