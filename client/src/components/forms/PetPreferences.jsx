import React from 'react';
import { AnimalPreferences } from './checkboxes'

export const PetPreferences = (props) => {
    const { nextPage, previousPage, onCheck } = props
    return (
        <form>        
            <AnimalPreferences onCheck={onCheck}/>
            <button onClick={previousPage}>Back</button>
            <button onClick={nextPage} type="submit">Next</button>
        </form>
    )
}
