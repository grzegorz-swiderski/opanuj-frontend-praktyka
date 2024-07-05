import { SearchCountrySelect } from './SearchCountrySelect.tsx';
import { SearchCountryInput } from './SearchCountryInput.tsx';
import { sortOptionLabel, sortOptions, filterOptionLabel, filterOptions, inputLabel } from '../consts/consts.ts';
import { SearchCountryFormProps } from '../types/types.ts';

export const SearchCountryForm = ({
  sortOption,
  filterOption,
  filterValue,
  handleSortOption,
  handleFilterOption,
  handleFilterValue
}: SearchCountryFormProps) => {
  const sortOptionList = Object.values(sortOptions);
  const filterOptionList = Object.values(filterOptions);

  return (
    <form className="space-x-4 flex items-end justify-center mb-12">
      <SearchCountrySelect
        label={sortOptionLabel}
        sortOption={sortOption}
        optionList={sortOptionList}
        onChange={handleSortOption}
      />
      <SearchCountrySelect
        label={filterOptionLabel}
        sortOption={filterOption}
        optionList={filterOptionList}
        onChange={handleFilterOption}
      />
      <SearchCountryInput label={inputLabel} value={filterValue} onChange={handleFilterValue} />
    </form>
  );
};
