// import App from 'next/app'
import '/public/css/style.css';

import { ThemeProvider } from '../context/theme';
import { TopNavComponent } from '../components/TopNav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <TopNavComponent />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
