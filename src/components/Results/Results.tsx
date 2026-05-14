import { useEffect } from 'react';
import './results.scss';
import Spinner from '../Spinner/Spinner';
import { ResultsProps } from '../../types/types';
import PokemonList from '../PokemonList/PokemonList';
import ErrorView from '../Error/Error';

const Results = ({ loading, error, errorTest, data }: ResultsProps) => {
  useEffect(() => {
    if (errorTest) {
      throw new Error(`Test error: ${errorTest}`);
    }
  }, [errorTest]);

  return (
    <div className="results">
      {error ? <ErrorView error={error} /> : null}
      {loading ? <Spinner /> : error ? null : <PokemonList data={data} />}
    </div>
  );
};

export default Results;
