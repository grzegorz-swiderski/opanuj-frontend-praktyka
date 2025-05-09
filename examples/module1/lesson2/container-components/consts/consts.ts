import { OptionList } from '../types/OptionList.ts';

export const genderList: OptionList[] = [
    { value: '', name: 'Any Gender' },
    { value: 'female', name: 'Female' },
    { value: 'male', name: 'Male' },
    { value: 'genderless', name: 'Genderless' },
    { value: 'unknown', name: 'Unknown' }
]

export const sortList: OptionList[] = [
    { value: '', name: 'Initial' },
    { value: 'name', name: 'Name' },
    {value: 'created', name: 'Created Date'}
]