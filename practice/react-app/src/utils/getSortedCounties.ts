import { sortOptions } from '../consts/consts.ts';
import { sortByName } from './sortByName.ts';
import { sortByPopulationAsc } from './sortByPopulationAsc.ts';
import { sortByPopulationDesc } from './sortByPopulationDesc.ts';
import { CountryProps } from '../types/types.ts';

export const getSortedCounties = (countries: CountryProps[], sortOption: string) =>
  sortOption === sortOptions.name
    ? sortByName([...countries])
    : sortOption === sortOptions.asc
      ? sortByPopulationAsc([...countries])
      : sortByPopulationDesc([...countries]);
