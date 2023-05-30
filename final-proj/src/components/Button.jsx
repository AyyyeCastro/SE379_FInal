import React from 'react';

const Button = ({ label, onClick, active }) => {
  return (
    <div className={`button ${active ? 'active' : ''}`} onClick={onClick}>
       {label}
    </div>
  );
};
 
 export default Button;
 