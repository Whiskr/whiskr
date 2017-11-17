import React from 'react'
import {connect} from 'react-redux'

class Checkbox extends React.Component {
    constructor(){
        super()
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const value = event.target.checked;
        this.setState({
            [event.target.name]: value
        })
        .then(() => {this.props.onCheck(this.state, this.props.name)})  
    }

    render () {
        const { name, displayName, handleSubmit, error } = props;

        return (
            <div>
                <legend>{displayName}</legend>
                <div>
                    <label htmlFor={name}><small>Dogs</small></label>
                    <input name="dogs" type="checkbox" value="dog" checked={this.state.dogs} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor={name}><small>Cats</small></label>
                    <input name="cats" type="checkbox" value="cat" checked={this.state.cats} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor={name}><small>Birds</small></label>
                    <input name="birds" type="checkbox" value="bird" checked={this.state.birds} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor={name}><small>Small Mammals</small></label>
                    <input name="smallFurries" type="checkbox" value="smallFurry" checked={this.state.smallFurry} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor={name}><small>Reptiles</small></label>
                    <input name="reptiles" type="checkbox" value="reptile" checked={this.state.reptiles} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor={name}><small>Horses</small></label>
                    <input name="horses" type="checkbox" value="horse" checked={this.state.horses} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor={name}><small>Barnyard Animals</small></label>
                    <input name="barnyardAnimals" type="checkbox" value="barnyardAnimal" checked={this.state.barnyardAnimals} onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

const mapAnimalPreferences = (state) => {
  return {
    name: 'animalPreferences',
    displayName: 'Types of Animals You Prefer to Match With:',
  }
}

const mapPetTypes = (state) => {
  return {
    name: 'otherPetTypes',
    displayName: 'Types of Animals You Currently Own:',
  }
}

export const AnimalPreferences = connect(mapAnimalPreferences)(Checkbox)
export const OtherPetTypes = connect(mapPetTypes)(Checkbox)