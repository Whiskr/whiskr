import React from 'react';
import { connect } from 'react-redux';
import { OtherPetTypes } from './checkboxes'

export const PetHistory = () => {

    const { onSubmit, previousPage, onCheck, onChange, user } = this.props
    return (
        <form onSubmit={onSubmit}>        
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
                  value={true}
                  type="radio"
                  onChange={(event) => onChange(event)}
                />
                <label htmlFor="NoChildren">No</label>
                <input
                  id="NoChildren"
                  name="hasYoungChildren"
                  value={false}
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
                onChange={(event) => onChange(event)}
              >
                {user.petHistory}
              </textarea>
            </div>
            <button onClick={previousPage}>Back</button>
            <button type="submit">Next</button>
        </form>
    )
}