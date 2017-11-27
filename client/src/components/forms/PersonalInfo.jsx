import React from 'react';

export const PersonalInfo = (props) => {
    const { nextPage, onChange, defaultValue, form } = props
    let phoneWarning = '';
    if (form.phoneNumber.length < 10) phoneWarning = 'Please enter a complete phone number with an area code';
    let zipWarning = '';
    if (form.zipCode.length < 5) zipWarning = 'Please enter a zip code so we can find the animals near you'
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
            { phoneWarning && <div>{phoneWarning}</div> }
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
            { zipWarning && <div>{zipWarning}</div> }
            <button onClick={nextPage} type="submit">Next</button>
        </form>
    )
}
