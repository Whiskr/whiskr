import React from 'react';
import { connect } from 'react-redux';

export const PersonalInfo = (props) => {
    const { nextPage, onChange, value, user, form } = props
    return (
        <form>        
            <div>
                <label htmlFor="email">Email</label>
                <input
                name="email"
                type="text"
                placeholder={value("email")}
                value={form.email}
                onChange={(event) => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                name="phoneNumber"
                type="text"
                placeholder={value("phoneNumber")}
                value={form.phoneNumber}
                onChange={(event) => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                name="zipCode"
                type="text"
                placeholder={value("zipCode")}
                value={form.zipCode}
                onChange={(event) => onChange(event)}
                />
            </div>
            <button onClick={nextPage} type="submit">Next</button>
        </form>
    )
}
