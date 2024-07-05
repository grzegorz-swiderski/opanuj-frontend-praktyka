import { Option } from './Option.tsx';

export const OptionList = ({ options }: { options: string[] }) => (
  <>
    {options.map((option) => (
      <Option option={option} />
    ))}
  </>
);
