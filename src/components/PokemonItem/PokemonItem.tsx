import { Component } from 'react';
import { PokemonDescription } from '../../types/types';
import './pokemon-item.scss';

class PokemonItem extends Component<PokemonDescription> {
  render() {
    return (
      <div className="pokemon-item">
        <div
          className="pokemon-item-image"
          style={{
            backgroundImage: `url(${this.props.imageUrl})`,
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="pokemon-item-descr">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default PokemonItem;
