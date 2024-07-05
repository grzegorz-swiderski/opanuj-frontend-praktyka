import { Label, Input } from '../components';
import { SearchCountryInputProps } from '../types/types.ts';

export const SearchCountryInput = ({ label, value, onChange }: SearchCountryInputProps) => (
  <Label label={label}>
    <Input value={value} onChange={onChange} />
  </Label>
);
