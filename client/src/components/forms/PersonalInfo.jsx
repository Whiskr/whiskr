import React from 'react';
import FormErrors from './FormErrors';

export const PersonalInfo = (props) => {
  const {
    nextPage, onChange, defaultValue, form, validation, validateFunction
  } = props;

  return (
    <form>
      <h2>{props.display}</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder={defaultValue('email')}
          value={form.email}
          onChange={event => onChange(event)}
          onBlur={event => validateFunction(event)}
          required
        />
        <FormErrors field={'Email'} error={validation.formValidations.email} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          type="text"
          placeholder={defaultValue('phoneNumber')}
          value={form.phoneNumber}
          onChange={event => onChange(event)}
        />
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          name="zipCode"
          type="text"
          placeholder={defaultValue('zipCode')}
          value={form.zipCode}
          onChange={event => onChange(event)}
          onBlur={event => validateFunction(event)}
          required
        />
        <FormErrors field={'Zip Code'} error={validation.formValidations.zipCode} />
      </div>
      <button onClick={nextPage} type="submit" disabled={!validation.formValid}>Next</button>
    </form>
  );
};
