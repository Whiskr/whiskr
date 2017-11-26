import React from 'react';
import { connect } from 'react-redux';
import { AnimalPreferences } from './checkboxes'

export const PetPreferences = () => {
    const { onSubmit, previousPage, onCheck } = this.props
    return (
        <form onSubmit={onSubmit}>        
            <AnimalPreferences onCheck={onCheck}/>
            <button onClick={previousPage}>Back</button>
            <button type="submit">Next</button>
        </form>
    )
}
