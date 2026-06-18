'use client';

import './about-page.scss';
import { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';
import { ThemeContext } from '../providers/ThemeProvider';
import { IThemeContext } from '../types/types';

const AboutPage = () => {
  const t = useTranslations('about');
  const { theme } = useContext<IThemeContext>(ThemeContext);

  return (
    <div className={`about-page ${theme}`}>
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
        <Link href="/" className={`about-page-back-button ${theme}`}>
          {t('back')}
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
