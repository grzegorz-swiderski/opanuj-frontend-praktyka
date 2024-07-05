type InuptProps = {
    label: string;
    value: string;
    onChange: (value: string) => void
}

export const Input = ({ label, value, onChange}: InuptProps) => (
    <label className="flex flex-col">
        {label}
        <input
            className="border h-7 mt-1 indent-2"
            type="text"
            placeholder="Rick Sanchez..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </label>
)
