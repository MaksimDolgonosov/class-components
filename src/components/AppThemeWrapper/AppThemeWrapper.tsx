'use client';

import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';

type AppThemeWrapperProps = {
  children: React.ReactNode;
};

const AppThemeWrapper = ({ children }: AppThemeWrapperProps) => {
  const { theme } = useContext<IThemeContext>(ThemeContext);

  return <div className={`app ${theme}`}>{children}</div>;
};

export default AppThemeWrapper;
