import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';
import Head from 'next/head';

export const ToggleThemeComponent = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${theme}.css`} />
      </Head>
      {theme === 'light' ? (
        <span
          style={{ fontSize: '24px' }}
          onClick={() => {
            setTheme('dark');
            localStorage.setItem('them', 'dark');
          }}
        >
          🌃
        </span>
      ) : (
        <span
          style={{ fontSize: '24px' }}
          onClick={() => {
            setTheme('light');
            localStorage.setItem('theme', 'light');
          }}
        >
          🌅
        </span>
      )}
    </>
  );
};
