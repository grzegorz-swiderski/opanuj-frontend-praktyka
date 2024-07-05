import { SelectProps } from '../types/types.ts';

export const Select = ({ value, onChange, children }: SelectProps) => (
  <select value={value} onChange={onChange} className="border h-7 mt-1">
    {children}
  </select>
);
