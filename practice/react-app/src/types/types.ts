import React from 'react';

export interface SearchCountryFormProps {
  sortOption: string;
  filterOption: string;
  filterValue: string;
  handleSortOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFilterOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFilterValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CountryListProps {
  countryList: CountryProps[];
}

export interface CountryCardProps {
  name: string;
  flag: string;
}

export interface SearchCountrySelectProps {
  label: string;
  sortOption: string;
  optionList: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SearchCountryInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  label: string;
  children: React.ReactNode;
}

export interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CountryProps {
  capital: string[];
  currencies: Record<string, CurrencyProps>;
  flag: string;
  flags: FlagProps;
  languages: Record<string, string>;
  name: NameProps;
  population: number;
}

interface CurrencyProps {
  name: string;
  symbol: string;
}

interface FlagProps {
  png: string;
  svg: string;
  alt: string;
}

interface NameProps {
  common: string;
  nativeName: Record<string, NativeNameProps>;
  official: string;
}

interface NativeNameProps {
  common: string;
  official: string;
}
