import useFetch from "../../utils/useFetch";
import { centralBankInterestRateAPIUrl } from "../../publicAPIs/publicAPIs";

interface ApiResponse {
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

function CentralBankInterestRate() {
  const { data, isLoading, error } = useFetch<ApiResponse>(
    centralBankInterestRateAPIUrl,
  );

  if (isLoading) return <p>Henter innhold...</p>;
  if (error) return <p>En feil oppstod, vennligst prøv igjen senere.</p>;

  const centralBankInterestRate = data?.dataSets[0]?.series?.["0:0:0:0"]?.observations?.["0"]?.[0];
  if (!centralBankInterestRate) {
    return <p>Kunne ikke hente valutakurs</p>;
  }
  return <p>🪙 Styringsrente {centralBankInterestRate}%</p>;
}

export default CentralBankInterestRate;
