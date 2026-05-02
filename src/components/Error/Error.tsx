import { Component } from 'react';
import './error.scss';
import { ErrorProps } from '../../types/types';
import ErrorPicture from '../../assets/error/PngItem.png';

class Error extends Component<ErrorProps> {
  render() {
    return (
      <div className="error">
        <div className="error-text">{this.props.error}</div>
        <div className="error-picture">
          <img src={ErrorPicture} alt="Error" />
        </div>

        {this.props.comment ? (
          <div className="error-comment">{this.props.comment}</div>
        ) : null}
      </div>
    );
  }
}

export default Error;
