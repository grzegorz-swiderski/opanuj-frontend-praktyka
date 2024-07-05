import { Select } from './components/Select.tsx';
import { SelectList } from './components/SelectList.tsx';
import { genderList, sortList } from '../../consts/consts.ts';
import {Input} from "./components/Input.tsx";

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

export const SearchForm = ({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) => {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <Input label='Name' value={name} onChange={setName} />
      <Select label='Gender' value={gender} onChange={setGender}>
        <SelectList optionList={genderList} />
      </Select>
      <Select label='Sort by' value={sortOption} onChange={setSortOption}>
        <SelectList optionList={sortList} />
      </Select>
    </form>
  );
};
