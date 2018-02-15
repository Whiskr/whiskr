import React from 'react';

export const FormErrors = (props) => {
  const {field, error } = props;
  return (
    <div className="formErrors">
        {error.length > 0
            ? <p>{field} {error}</p>
            : ''}
    </div>
  )
}

