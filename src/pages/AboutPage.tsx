import './about-page.scss';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      <h1>About Page</h1>
      <div className="about-page-content">
        <p>
          Hello! My name is Maksim Dolgonosov. I'm a student of the RS School
          React course. Here you can find information about the pokemon finder
          app.
        </p>

        <p>
          My GitHub:{' '}
          <a
            href="https://github.com/MaksimDolgonosov"
            target="_blank"
            rel="noopener noreferrer"
          >
            MaksimDolgonosov
          </a>
        </p>
        <p>
          React course:{' '}
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            RS School React course
          </a>
        </p>
        <button
          className="about-page-back-button"
          onClick={() => navigate('/')}
        >
          Back to the main page
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
