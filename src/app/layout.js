'use client';

import AppContext from '@context/AppContext';
import Script from 'next/script';
import useInitialState from '@hooks/useInitialState';
import Headers from '@components/Headers';
import Search from '@components/Search';
import styles from '@styles/globals.css';

export default function RootLayout({ children }) {
  const initialState = useInitialState();
  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={initialState}>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4LQ558FV6R"
        strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', 'G-4LQ558FV6R');
            `}
          </Script>
          <Headers />
          <Search />
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
