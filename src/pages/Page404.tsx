import { useNavigate } from 'react-router-dom';
import ErrorPicture from '../assets/error/PngItem.png';
import './page404.scss';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="page404">
      <h1>Page not found</h1>
      {/* <p className="page404-error-text">error 404</p> */}
      <div className="error-picture">
        <img src={ErrorPicture} alt="Error" />
      </div>
      <button className="page404-back-button" onClick={() => navigate('/')}>
        Back to the main page
      </button>
    </div>
  );
};

export default Page404;
