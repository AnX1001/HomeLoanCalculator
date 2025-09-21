import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_BY_CONTINENT } from "./queries";
import styles from "./office.module.scss";

function Offices({ continentCode }: { continentCode: string }) {
  const { data, loading, error } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: { continentCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <details name="offices">
        <summary className={styles.summary}>Våre lokasjoner</summary>

        <ul className={styles.officeList}>
          {data.continent.countries
            .slice(0, 10)
            .map((country: { code: string; name: string; capital: string }) => (
              <li key={country.code}>
                <strong>{country.name}</strong> - Capital: {country.capital}
              </li>
            ))}
        </ul>
      </details>
    </div>
  );
}

export default Offices;
