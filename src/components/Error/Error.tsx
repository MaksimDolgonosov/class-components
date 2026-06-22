import Image from 'next/image';
import './error.scss';
import { ErrorProps } from '../../types/types';
import ErrorPicture from '../../assets/error/PngItem.png';

const Error = ({ error, comment, onRetry }: ErrorProps) => {
  return (
    <div className="error">
      <div className="error-text">{error}</div>
      <div className="error-picture">
        <Image src={ErrorPicture} alt="Error" width={200} height={200} />
      </div>
      {comment ? <div className="error-comment">{comment}</div> : null}
      {onRetry ? (
        <button className="about-error-test" onClick={onRetry}>
          Try again
        </button>
      ) : null}
    </div>
  );
};

export default Error;
