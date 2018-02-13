import React from 'react';
import { FormErrors }  from './FormErrors';

export class PersonalInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailVisitedBefore: false,
      zipVisitedBefore: false,
      emailValid: true,
      zipCodeValid: true,
      formValid: true,
      fieldErrors: {email: '', zipCode: ''}
    }
    this.validateField = this.validateField.bind(this);
    this.validateOnChange = this.validateOnChange.bind(this);
    this.markAsVisited = this.markAsVisited.bind(this);
  }

  validateField(evt) {
    evt.preventDefault();
    const fieldName = evt.target.name;
    const value = evt.target.value;
    let fieldValidationErrors = this.state.fieldErrors;
    let emailValid = this.state.emailValid;
    let zipCodeValid = this.state.zipCodeValid;

    switch (fieldName) {
      case 'email':
        emailValid = (value.search(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) >= 0);
        console.log(emailValid)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'zipCode':
        zipCodeValid = (value.length === 5);
        fieldValidationErrors.zipCode = zipCodeValid ? '' : ' is invalid';
        break;
      default:
        break;
    }

    let validity = emailValid && zipCodeValid;

    this.setState({fieldErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    zipCodeValid: zipCodeValid,
                    formValid: validity
                  });
  }
  
  validateOnChange(evt, onChangeFunction, fieldStatus) {
    onChangeFunction(evt);
    if (fieldStatus) {
      this.validateField(evt);
    }
  }

  markAsVisited(field){
    this.setState({ [field]: true });
  }

 render(){
    const {
      nextPage, onChange, defaultValue, form, display
    } = this.props;
    const { fieldErrors, formValid, emailVisitedBefore, zipVisitedBefore } = this.state;
    return (
      <form>
        <h2>{display}</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder={defaultValue('email')}
            value={form.email}
            onChange={event => {
              onChange(event);
              if (emailVisitedBefore) this.validateField(event);
            }}
            onBlur={event => {
              this.markAsVisited('emailVisitedBefore');
              this.validateField(event)
            }}
            required
          />
          <FormErrors field={'Email'} error={fieldErrors.email} />
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
            onChange={event => {
              onChange(event);
              if (zipVisitedBefore) this.validateField(event);
            }}
            onBlur={event => {
              this.markAsVisited('zipVisitedBefore');
              this.validateField(event)
            }}
            required
          />
          <FormErrors field={'Zip Code'} error={fieldErrors.zipCode} />
        </div>
        <button onClick={nextPage} type="submit" disabled={!formValid}>Next</button>
      </form>
    );
  }
}
