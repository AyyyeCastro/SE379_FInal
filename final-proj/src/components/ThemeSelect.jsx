import React from 'react';

const ThemeSelect = ({ onChange, options }) => {
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
