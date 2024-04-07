interface BankArticleProps {
  title: string;
  subtitle: string;
  paragraph: string;
  instructions: string;
  imageElement?: React.ReactNode;
}

function BankArticle({ title, subtitle, paragraph, instructions, imageElement }: BankArticleProps) {
  return (
    <div>
      <h1>{title}</h1>
      {imageElement}
      <h2>{subtitle}</h2>
      <p>{paragraph}</p>
      <p>{instructions}</p>
    </div>
  );
}

export default BankArticle;
