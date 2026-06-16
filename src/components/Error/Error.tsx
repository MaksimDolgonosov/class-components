import './error.scss';
import { ErrorProps } from '../../types/types';
import ErrorPicture from '../../assets/error/PngItem.png';

const Error = ({ error, comment, onRetry }: ErrorProps) => {
  return (
    <div className="error">
      <div className="error-text">{error}</div>
      <div className="error-picture">
        <img src={ErrorPicture.src} alt="Error" />
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
