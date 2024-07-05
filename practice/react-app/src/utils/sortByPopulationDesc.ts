import { CountryProps } from '../types/types.ts';

export const sortByPopulationDesc = (countries: CountryProps[]) =>
  countries.sort((a, b) => b.population - a.population);
