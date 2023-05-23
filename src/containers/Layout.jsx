import React from 'react';
import Headers from '@components/Headers';
import Search from '@components/Search';

//recibirá un hijo(chidren)
const Layout = ({children}) => {
  return (
    <div className="Layout">
      <Headers />
      <Search />
      {children}
    </div>
  );
};

export default Layout;


