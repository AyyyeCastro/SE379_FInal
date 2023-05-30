import React from 'react'; // not needed, but was already here & does no harm(?)

interface ThemeSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const ThemeSelect: React.FC<ThemeSelectProps> = ({ onChange, options }) => {
  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelect;

