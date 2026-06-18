import spinner from '../../assets/spinner/spinner.svg';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner.src} alt="spinner" />
    </div>
  );
};

export default Spinner;
