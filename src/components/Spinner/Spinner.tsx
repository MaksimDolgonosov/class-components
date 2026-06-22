import Image from 'next/image';
import spinner from '../../assets/spinner/spinner.svg';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <Image src={spinner} alt="spinner" width={56} height={56} />
    </div>
  );
};

export default Spinner;
