import React from 'react';

type SelectProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    children: React.ReactNode;
};

export const Select = ({ label, value, onChange, children }: SelectProps) => (
    <>
        <label className="flex flex-col">
            {label}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border h-7 mt-1"
            >
                {children}
            </select>
        </label>
    </>
);
