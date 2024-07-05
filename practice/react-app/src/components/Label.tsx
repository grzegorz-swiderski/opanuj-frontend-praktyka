import { LabelProps } from '../types/types.ts';

export const Label = ({ label, children }: LabelProps) => (
  <label className="flex flex-col">
    {label}
    {children}
  </label>
);
