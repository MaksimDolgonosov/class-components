import './pokemon-info.scss';
import { useState, useEffect } from 'react';
import { OutletContext } from '../../types/types';
import { useOutletContext } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import getPokemonInfo from '../../services/fetchPokemonInfo';
import { PokemonInfoState } from '../../types/types';

const PokemonInfo = () => {
  const { pokemonId, setPokemonId } = useOutletContext<OutletContext>();
  const [state, setState] = useState<PokemonInfoState>({
    name: '',
    description: '',
    imageUrl: '',
    loading: false,
    error: null,
    height: 0,
    weight: 0,
    baseExperience: 0,
    baseHappiness: 0,
    captureRate: 0,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    getPokemonInfo(pokemonId)
      .then((data) => {
        setState((prev) => ({ ...prev, ...data, loading: false, error: null }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error: error.message, loading: false }));
      });
  }, []);

  return (
    <div className="pokemon-info">
      {state.loading ? (
        <Spinner />
      ) : (
        <>
          <div className="pokemon-info-header">
            <h2>{pokemonId?.toUpperCase()}</h2>
          </div>
          <div className="pokemon-info-content">
            <div className="pokemon-info-content-image">
              <img src={state.imageUrl} alt="Pokemon" />
            </div>
            <div className="pokemon-info-content-info">
              <p className="pokemon-info-content-info-description">
                {state.description}
              </p>
              <p className="pokemon-info-content-info-base-happiness">
                <span>Base Happiness:</span> {state.baseHappiness}
              </p>
              <p className="pokemon-info-content-info-capture-rate">
                <span>Capture Rate:</span> {state.captureRate}
              </p>
              <p className="pokemon-info-content-info-height">
                <span>Height:</span> {state.height}
              </p>
              <p className="pokemon-info-content-info-weight">
                <span>Weight:</span> {state.weight}
              </p>
              <p className="pokemon-info-content-info-base-experience">
                <span>Base Experience:</span> {state.baseExperience}
              </p>
            </div>
          </div>
        </>
      )}
      <button className="close-button" onClick={() => setPokemonId(null)}>
        Close
      </button>
    </div>
  );
};

export default PokemonInfo;
