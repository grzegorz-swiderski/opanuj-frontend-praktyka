import { CountryProps } from '../types/types.ts';

export const sortByPopulationAsc = (countries: CountryProps[]) => countries.sort((a, b) => a.population - b.population);
