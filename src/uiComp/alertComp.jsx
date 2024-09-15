import React from 'react';

const Alert = ({ message, type, onClose }) => {
  let alertClasses = 'fixed top-4 right-4 w-1/3 max-w-sm mx-auto p-4 rounded-md shadow-lg z-50 ';
  
  if (type === 'success') {
    alertClasses += 'bg-green-100 text-green-800';
  } else if (type === 'error') {
    alertClasses += 'bg-red-100 text-red-800';
  }

  return (
    <div className={alertClasses}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-semibold">&times;</button>
      </div>
    </div>
  );
};

export default Alert;