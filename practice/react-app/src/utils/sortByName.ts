import { CountryProps } from '../types/types.ts';

export const sortByName = (countries: CountryProps[]) =>
  countries.sort((a, b) => a.name.official.localeCompare(b.name.official));
