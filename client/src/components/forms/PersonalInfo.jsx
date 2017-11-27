import React from 'react';

export const PersonalInfo = (props) => {
    const { nextPage, onChange, defaultValue, form } = props
    return (
        <form>        
            <div>
                <label htmlFor="email">Email</label>
                <input
                name="email"
                type="text"
                placeholder={defaultValue("email")}
                value={form.email}
                onChange={(event) => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                name="phoneNumber"
                type="text"
                placeholder={defaultValue("phoneNumber")}
                value={form.phoneNumber}
                onChange={(event) => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                name="zipCode"
                type="text"
                placeholder={defaultValue("zipCode")}
                value={form.zipCode}
                onChange={(event) => onChange(event)}
                />
            </div>
            <button onClick={nextPage} type="submit">Next</button>
        </form>
    )
}
