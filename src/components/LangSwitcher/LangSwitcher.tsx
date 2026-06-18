import './lang-switcher.scss';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/navigation';

const LangSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (nextLocale: 'en' | 'ru') => {
    if (locale === nextLocale) {
      return;
    }
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Lang switcher">
      <span
        className={`lang-switcher__option ${locale === 'en' ? `lang-switcher__option--active ${locale}` : ''}`}
        onClick={() => switchTo('en')}
      >
        En
      </span>
      <span
        className={`lang-switcher__option ${locale === 'ru' ? `lang-switcher__option--active ${locale}` : ''}`}
        onClick={() => switchTo('ru')}
      >
        Ru
      </span>
    </div>
  );
};

export default LangSwitcher;
