import React from 'react';
import Cards, { Card } from 'react-swipe-card';
import { connect } from 'react-redux';
import { rejectPet, lovePet, refreshCards } from '../store';


const data = ['Spot', 'Duke', 'Fluffy'];

const AllPets = props => (
  <Cards onEnd={props.refreshCards} className="master-root">
    {data.map((item, i) =>
      (
        <Card
          key={i}
          onSwipeLeft={props.rejectPet(i)}
          onSwipeRight={props.lovePet(i)}
        >
          <h2>{item}</h2>
        </Card>
    ))}
  </Cards>
);

const mapState = () => ({matches}) => ({matches})

const mapDispatch = dispatch => ({ rejectPet, lovePet, refreshCards });

export default connect(mapState, mapDispatch)(AllPets);
