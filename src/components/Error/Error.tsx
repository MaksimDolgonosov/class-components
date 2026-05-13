import './error.scss';
import { ErrorProps } from '../../types/types';
import ErrorPicture from '../../assets/error/PngItem.png';

const Error = ({ error, comment }: ErrorProps) => {
  return (
    <div className="error">
      <div className="error-text">{error}</div>
      <div className="error-picture">
        <img src={ErrorPicture} alt="Error" />
      </div>

      {comment ? <div className="error-comment">{comment}</div> : null}
    </div>
  );
};

export default Error;
