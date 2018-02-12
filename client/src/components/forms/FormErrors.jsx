import React from 'react';

export const FormErrors = () => {
    const {field, error } = this.props;
  return (
    <div className="formErrors">
        {error.length > 0
            ? <p>{field} {error}</p>
            : ''}
    </div>
  )
}
