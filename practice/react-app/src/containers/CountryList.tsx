import { CountryCard } from './CountryCard.tsx';
import { CountryListProps } from '../types/types.ts';

export const CountryList = ({ countryList }: CountryListProps) => (
  <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {countryList.map((country) => (
      <CountryCard name={country.name.common} flag={country.flag} />
    ))}
  </ol>
);
