import useFetch from "../../utils/useFetch";
import styles from "./advisors.module.scss";

interface Advisor {
  id: number;
  name: string;
  email: string;
}

function Advisors() {
  const {
    data: advisors,
    isLoading,
    error,
  } = useFetch<Advisor[]>("https://jsonplaceholder.typicode.com/users");

  if (advisors === null) {
    return <p>Ingen rådigere er tilknyttet din konto.</p>;
  }

  if (isLoading) {
    return <p>Laster inn rådgivere...</p>;
  }

  if (error) {
    return <p>Noe gikk galt under nedlasting av rådgivere.</p>;
  }

  return (
    <div className={styles.container}>
      <details name="radgivere">
        <summary className={styles.summary}>Tilgjengelige rådgivere</summary>

        <ul className={styles.advisorsList}>
          {advisors.slice(0, 5).map((advisor) => (
            <li key={advisor.id}>
              <strong>{advisor.name}</strong>
              <br />
              <span>e-post: {advisor.email}</span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Advisors;
