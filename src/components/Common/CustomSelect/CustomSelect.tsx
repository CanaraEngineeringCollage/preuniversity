import React from "react";

interface CustomSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-3 pr-10 text-[20px]  text-textGray 
           focus:outline-none focus:ring-0 focus:border-[#2884CA] appearance-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        <svg
          width="10"
          height="10"
          viewBox="0 0 26 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9419 14.783L25.452 3.27266C25.7185 3.00644 25.8652 2.65106 25.8652 2.27213C25.8652 1.89319 25.7185 1.53781 25.452 1.27159L24.6046 0.423934C24.0524 -0.127643 23.1549 -0.127643 22.6035 0.423934L12.938 10.0895L3.26173 0.413209C2.9953 0.146988 2.64012 -1.0152e-06 2.2614 -1.03176e-06C1.88226 -1.04833e-06 1.52709 0.146988 1.26045 0.413208L0.413208 1.26087C0.146777 1.5273 -6.96497e-07 1.88247 -7.13061e-07 2.2614C-7.29625e-07 2.64033 0.146777 2.99572 0.413208 3.26194L11.9339 14.783C12.2011 15.0499 12.558 15.1964 12.9373 15.1956C13.3182 15.1964 13.6748 15.0499 13.9419 14.783Z"
            fill="#2A2A2A"
          />
        </svg>
      </span>
    </div>
  );
};

export default CustomSelect;
