import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  constructor() {
    super();
    this.pokeApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
  }

  padToThree(number) {
    return (number <=999 ? `00${number}`.slice(-3) : number );
  }

  render() {
    const { id, name, type, exp } = this.props;
    const imgSrc = `${this.pokeApi}${this.padToThree(id)}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{ name }</h2>
        <img className="Pokecard-image" src={ imgSrc } alt={name} />
        <p className="Pokecard-data">TYPE: { type }</p>
        <p className="Pokecard-data">EXP: { exp }</p>
      </div>
    );
  }
}

export default Pokecard;