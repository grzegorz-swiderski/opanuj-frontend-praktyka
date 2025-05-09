import { OptionList } from '../../../types/OptionList.ts';

type SelectListProps = {
    optionList: OptionList[];
};

export const SelectList = ({ optionList }: SelectListProps) => {
    return (
        <>
            {optionList.map(option => <option value={option.value}>{option.name}</option>)}
        </>
    );
};