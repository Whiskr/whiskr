import React, { Component } from 'react';

class SinglePet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: props.expand,
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  }

  render() {
    const { pet } = this.props;
    return (
      <div
        id="petCard"
        className={
        this.state.expand
        ? 'expanded'
        : 'collapsed'}
        onClick={this.onClick.bind(this)}
      >
        <div>
          <img
            src={
      pet.media.photos
      ? pet.media.photos.photo[3].$t
      : 'https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'}
            className="petPic rounded"
            alt="pet profile pic"
          />
        </div>
        <div>
          <h1>{pet.name.$t}</h1>
          <h2>{(Array.isArray(pet.breeds.breed)
      ? pet.breeds.breed.map(el => el.$t).join(', ')
      : pet.breeds.breed.$t
    )}
          </h2>
          <h5>Sex: {pet.sex.$t}</h5>
          <h3>Age: {pet.age.$t}</h3>
          <h4>Size: {pet.size.$t}</h4>
        </div>
        <div>
          <p>{pet.description.$t}</p>
        </div>
      </div>
    );
  }
}

export default SinglePet;
