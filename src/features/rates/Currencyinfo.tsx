import useFetch from "../../utils/useFetch";
import { currencyDollarAPIUrl } from "../../publicAPIs/publicAPIs";

interface CurrencyData {
  dataSets: {
    series: {
      [key: string]: {
        observations: {
          [key: string]: [string];
        };
      };
    };
  }[];
}

function CurrencyInfo() {
  const { data, isLoading, error } =
    useFetch<CurrencyData>(currencyDollarAPIUrl);

  if (isLoading) return <p>Henter innhold...</p>;
  if (error) return <p>En feil oppstod, vennligst prøv igjen senere.</p>;

  const dollarCurrency =
    data?.dataSets[0].series["0:0:0:0"].observations["1"][0];
  return (
    <>
      <p>$ {dollarCurrency}</p>
     
    </>
  );
}

export default CurrencyInfo;
