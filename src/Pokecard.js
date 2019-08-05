import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {

  padToThree(number) {
    return (number <=999 ? `00${number}`.slice(-3) : number );
  }

  render() {
    const { id, name, type, exp } = this.props;
    const pokeApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    const imgSrc = `${pokeApi}${this.padToThree(id)}.png`;
    
    return (
      <div className="Pokecard">
        <div>
          <h2 className="Pokecard-title">{ name }</h2>
          <img className="Pokecard-image" src={ imgSrc } alt={name} />
          <p className="Pokecard-data">TYPE: { type }</p>
          <p className="Pokecard-data">EXP: { exp }</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;