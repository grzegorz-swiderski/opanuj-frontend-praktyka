import React, { useState } from 'react';
import { useCountries } from '../hooks/useCountries.ts';
import { SearchCountryTitle } from './SearchCountryTitle.tsx';
import { CountryList } from './CountryList.tsx';
import { SearchCountryForm } from './SearchCountryForm.tsx';
import { getSortedCounties } from '../utils/getSortedCounties.ts';

export const SearchCountry = () => {
  const [sortOption, setSortOption] = useState<string>('');
  const [filterOption, setFilterOption] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const { countries, error, loading } = useCountries({ option: filterOption, value: filterValue });

  const countryList = !sortOption ? countries : getSortedCounties(countries, sortOption);

  const handleSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleFilterOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value);
  };

  const handleFilterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <SearchCountryTitle />
      <SearchCountryForm
        sortOption={sortOption}
        filterOption={filterOption}
        filterValue={filterValue}
        handleSortOption={handleSortOption}
        handleFilterOption={handleFilterOption}
        handleFilterValue={handleFilterValue}
      />
      {error.length ? <p>{error}</p> : <CountryList countryList={countryList} />}
    </>
  );
};
