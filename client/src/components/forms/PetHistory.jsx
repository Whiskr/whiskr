import React from 'react';
import { connect } from 'react-redux';
import { OtherPetTypes } from './checkboxes'

export class PetHistory extends React.Component {
    render() {
    console.log('inside Pet History', this.props)
    const { submitForm, previousPage, onCheck, onStringChange, onBooleanChange, value, user, form } = this.props
    return (
        <form onSubmit={(event) => event.preventDefault()}>        
            <OtherPetTypes onCheck={onCheck} />
            <div>
              <label htmlFor="hasYoungChildren">
                Do You Have Small Children?
              </label>
              <div className="radio">
                <label htmlFor="YesChildren">Yes</label>
                <input
                  id="YesChildren"
                  name="hasYoungChildren"
                  checked={form.hasYoungChildren}
                  type="radio"
                  onChange={(event) => onBooleanChange(event)}
                />
                <label htmlFor="NoChildren">No</label>
                <input
                  id="NoChildren"
                  name="hasYoungChildren"
                  checked={!form.hasYoungChildren}
                  type="radio"
                  onChange={(event) => onBooleanChange(event)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="petHistory">
                <small>What is Your Pet Owning History?</small>
              </label>
              <textarea
                name="petHistory"
                type="textarea"
                placeholder={value("petHistory")}
                onChange={(event) => onStringChange(event)} 
              >
                {form.petHistory}
              </textarea>
            </div>
            <button onClick={previousPage}>Back</button>
            <button onClick={submitForm} type="submit">Submit</button>
        </form>
    )
  }
}
