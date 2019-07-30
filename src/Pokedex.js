import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  static defaultProps = {
    cardList: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  }

  render(){
    const { cardList, exp, isWinner } = this.props;
    const pokemonList = cardList.map( p => {
                          return (<Pokecard key={ p.id }
                                    id={ p.id }
                                    name={ p.name }
                                    type={ p.type }
                                    exp={ p.base_experience }
                                  />);
                        });                        
    let title = <h3 className="Pokedex-looser">You Loose</h3>
    
    if(isWinner) title = <h3 className="Pokedex-winner">You Win</h3>

    return (
      <div className="Pokedex">
        { title }
        <h4 className="Pokedex-total-exp">Total Experience: { exp }</h4>
        <div className="Pokedex-cards">
          { pokemonList }
        </div>
      </div>
    );
  }
}

export default Pokedex;

