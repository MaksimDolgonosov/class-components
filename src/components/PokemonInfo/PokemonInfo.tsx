import './pokemon-info.scss';
import { useOutletContext } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { OutletContext } from '../../types/types';
import { useGetPokemonByNameQuery } from '../../api/apiSlice';

const PokemonInfo = () => {
  const { pokemonId, setPokemonId } = useOutletContext<OutletContext>();
  const { data, isError, error, isFetching } = useGetPokemonByNameQuery(
    pokemonId || '',
    { skip: !pokemonId }
  );

  const errorMessage =
    isError && error
      ? 'status' in error
        ? `Request failed with status: ${error.status}`
        : 'Failed to load pokemon'
      : null;

  return (
    <div className="pokemon-info">
      {isFetching ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="pokemon-info-error">{errorMessage}</p>
      ) : data ? (
        <>
          <div className="pokemon-info-header">
            <h2>{data.name.toUpperCase()}</h2>
          </div>
          <div className="pokemon-info-content">
            <div className="pokemon-info-content-image">
              <img src={data.imageUrl} alt={data.name} />
            </div>
            <div className="pokemon-info-content-info">
              <p className="pokemon-info-content-info-description">
                {data.description}
              </p>
              <p className="pokemon-info-content-info-base-happiness">
                <span>Base Happiness:</span> {data.baseHappiness}
              </p>
              <p className="pokemon-info-content-info-capture-rate">
                <span>Capture Rate:</span> {data.captureRate}
              </p>
              <p className="pokemon-info-content-info-height">
                <span>Height:</span> {data.height}
              </p>
              <p className="pokemon-info-content-info-weight">
                <span>Weight:</span> {data.weight}
              </p>
              <p className="pokemon-info-content-info-base-experience">
                <span>Base Experience:</span> {data.baseExperience}
              </p>
            </div>
          </div>
        </>
      ) : null}
      <button className="close-button" onClick={() => setPokemonId(null)}>
        Close
      </button>
    </div>
  );
};

export default PokemonInfo;
