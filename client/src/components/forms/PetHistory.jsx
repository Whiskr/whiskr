import React from 'react';
import { OtherPetTypes } from './checkboxes'

export class PetHistory extends React.Component {
    render() {
    const { submitForm, previousPage, onCheck, onChange, defaultValue, form } = this.props
    let historyWarning = ''
    if (form.petHistory === undefined || form.petHistory.length === 0) historyWarning = 'Your Pet Owning History is important for shelters and caregivers to ensure that you are a good match for their pet'
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
                  onChange={(event) => onChange(event)}
                />
                <label htmlFor="NoChildren">No</label>
                <input
                  id="NoChildren"
                  name="hasYoungChildren"
                  checked={!form.hasYoungChildren}
                  type="radio"
                  onChange={(event) => onChange(event)}
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
                placeholder={defaultValue("petHistory")}
                onChange={(event) => onChange(event)} 
              >
                {form.petHistory}
              </textarea>
            { historyWarning && <div className="form-warning">{historyWarning}</div> }
            </div>
            <button onClick={previousPage}>Back</button>
            <button onClick={submitForm} type="submit">Submit</button>
        </form>
    )
  }
}
