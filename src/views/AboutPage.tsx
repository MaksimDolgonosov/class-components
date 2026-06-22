import { getTranslations } from 'next-intl/server';
import { Link } from '../i18n/navigation';
import './about-page.scss';

const AboutPage = async () => {
  const t = await getTranslations('about');

  return (
    <div className="about-page">
      <h1>{t('title')}</h1>
      <div className="about-page-content">
        <p>{t('intro')}</p>

        <p>
          {t('github')}{' '}
          <a
            href="https://github.com/MaksimDolgonosov"
            target="_blank"
            rel="noopener noreferrer"
          >
            MaksimDolgonosov
          </a>
        </p>
        <p>
          {t('course')}{' '}
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            RS School React course
          </a>
        </p>
        <Link href="/" className="about-page-back-button">
          {t('back')}
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
