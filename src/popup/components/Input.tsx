import { useState, useEffect } from "react";

export type Props = {
  label?: string;
  initialValue: string;
  readOnly?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const Input = ({
  readOnly = false,
  initialValue = "",
  label,
  placeholder,
  onChange,
}: Props) => {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={
          readOnly
            ? "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm focus:outline-none"
            : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 text-sm"
        }
      />
    </div>
  );
};
