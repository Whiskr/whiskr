import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PetTypes = () => {
    return (
        <div>
            <Link to="/pets/dog"><img/></Link>
            <Link to="/pets/cat"><img/></Link>
            <Link to="/pets/bird"><img/></Link>
            <Link to="/pets/rabbit"><img/></Link>
            <Link to="/pets/smallfurry"><img/></Link>
            <Link to="/pets/scalesFinsOther"><img/></Link>
            <Link to="/pets/horse"><img/></Link>
            <Link to="/pets/barnyard"><img/></Link>
        </div>
    )
}