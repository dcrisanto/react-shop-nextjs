'use client';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Headers from "@components/Headers";
import Search from "@components/Search";
import styles from '@styles/globals.css';

export default function RootLayout({children,}) {
  const initialState = useInitialState();
  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={initialState}>
          <Headers />
          <Search />
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}

