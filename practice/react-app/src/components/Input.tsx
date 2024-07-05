import { InputProps } from '../types/types.ts';

export const Input = ({ value, onChange }: InputProps) => (
  <input className="border h-7 mt-1 indent-2" type="text" placeholder="" value={value} onChange={onChange} />
);
