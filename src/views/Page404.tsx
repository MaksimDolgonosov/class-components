'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '../i18n/navigation';
import ErrorPicture from '../assets/error/PngItem.png';

const Page404 = () => {
  const t = useTranslations('notFound');

  return (
    <div className="page404">
      <h1>{t('title')}</h1>
      <div className="error-picture">
        <Image src={ErrorPicture} alt="Error" width={200} height={200} />
      </div>
      <Link href="/" className="page404-back-button">
        {t('back')}
      </Link>
    </div>
  );
};

export default Page404;
