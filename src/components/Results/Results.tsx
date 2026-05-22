import { useEffect } from 'react';
import './results.scss';
import Spinner from '../Spinner/Spinner';
import { ResultsProps } from '../../types/types';
import PokemonList from '../PokemonList/PokemonList';
import ErrorView from '../Error/Error';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';

const Results = ({
  loading,
  error,
  errorTest,
  data,
  onPokemonClick,
}: ResultsProps) => {
  const { theme } = useContext<IThemeContext>(ThemeContext);
  useEffect(() => {
    if (errorTest) {
      throw new Error(`Test error: ${errorTest}`);
    }
  }, [errorTest]);

  return (
    <div className={`results ${theme}`}>
      {error ? <ErrorView error={error} /> : null}
      {loading ? (
        <Spinner />
      ) : error ? null : (
        <PokemonList data={data} onPokemonClick={onPokemonClick} />
      )}
    </div>
  );
};

export default Results;
