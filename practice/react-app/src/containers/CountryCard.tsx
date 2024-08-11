import { CountryCardProps } from '../types/types.ts';

export const CountryCard = ({ name, flag }: CountryCardProps) => (
  <div className="flex flex-col items-center shadow-lg p-4">
    <span>{flag}</span>
    <p>{name}</p>
  </div>
);
