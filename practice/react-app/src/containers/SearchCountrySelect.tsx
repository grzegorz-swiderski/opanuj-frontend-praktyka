import { Label, Select, OptionList } from '../components';
import { SearchCountrySelectProps } from '../types/types.ts';

export const SearchCountrySelect = ({ label, sortOption, onChange, optionList }: SearchCountrySelectProps) => (
  <Label label={label}>
    <Select value={sortOption} onChange={onChange}>
      <OptionList options={optionList} />
    </Select>
  </Label>
);
