import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
  static defaultProps = {
    pokemonList: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }

  constructor(props) {
    super(props);
    this.state = this.createHands();
    this.handleClick = this.handleClick.bind(this);
  }

  createArray() {
    let arr = Array.from({ length: 4 });
    let filledArray = arr.map(idx => this.props.pokemonList[Math.floor(Math.random()*this.props.pokemonList.length)]);

    return filledArray;
  }

  createHands() {
    let hand1 = [];
    let hand2 = [ ...this.props.pokemonList ];

    while(hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random()* hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }

    return { houseHand: hand1, playerHand: hand2 };

  }

  generateCards() {    
    this.setState( this.createHands() );
  }

  handleClick(e) {
    this.generateCards();
  }

  render() {
    //set up two hands
    let hand1 = this.state.houseHand;
    let hand2 = this.state.playerHand;

    //find winner
    let hand1Exp = hand1.reduce( (exp, pokemon) => exp + pokemon.base_experience , 0);
    let hand2Exp = hand2.reduce( (exp, pokemon) => exp + pokemon.base_experience , 0);

    return (
      <div>
        <h1>Pokemon Game</h1>
        <Pokedex cardList={ hand1 } exp={ hand1Exp } isWinner={ hand1Exp > hand2Exp } title="House" />
        <Pokedex cardList={ hand2 } exp={ hand2Exp } isWinner={ hand2Exp > hand1Exp } title="You" />
        <button className="Pokegame-play-btn" onClick={ this.handleClick }>Play Again</button>
      </div>
    );
  }
}

export default Pokegame;