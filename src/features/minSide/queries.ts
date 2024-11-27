import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query GetCountriesByContinent($continentCode: ID!) {
    continent(code: $continentCode) {
      name
      countries {
        name
        code
        capital
      }
    }
  }
`;
