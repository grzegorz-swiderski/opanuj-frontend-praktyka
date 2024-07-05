import axios from 'axios';
import { useState, useEffect } from 'react';
import { filterOptions } from '../consts/consts.ts';
import { CountryProps } from '../types/types.ts';

type CountriesProps = {
  countries: CountryProps[];
  error: string;
  loading: boolean;
};

type useCountriesProps = {
  option?: string;
  value?: string;
};

export const useCountries = ({ option, value }: useCountriesProps): CountriesProps => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const url: string =
    option && value && option !== filterOptions.default ? `${option}/${value}` : filterOptions.default;

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          `https://restcountries.com/v3.1/${url}?status=true&fields=name,languages,capital,currencies,population,flag,flags`
        );
        setCountries(data.data);
        setError('');
        setLoading(false);
      } catch (err) {
        setCountries([]);
        setError("Can't fount country");
        setLoading(false);
      }
    })();
  }, [option, value]);

  return { countries, error, loading };
};
