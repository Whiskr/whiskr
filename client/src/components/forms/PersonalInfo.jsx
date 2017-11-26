import React from 'react';
import { connect } from 'react-redux';

export const PersonalInfo = () => {
    const { onSubmit, onChange, user } = this.props
    return (
        <form onSubmit={onSubmit}>        
            <div>
                <label htmlFor="email">Email</label>
                <input
                name="email"
                type="text"
                value={user.email}
                onChange={(event) => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                name="phoneNumber"
                type="text"
                value={user.phoneNumber}
                onChange={(event) => onChange(event)}
                />
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                name="zipCode"
                type="text"
                value={user.zipCode}
                onChange={(event) => onChange(event)}
                />
            </div>
            <button type="submit">Next</button>
        </form>
    )
}
