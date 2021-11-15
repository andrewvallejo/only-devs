import React, { useContext } from 'react';

import { Header } from '../components/layout/Header';
import { SideBar } from '../components/layout/SideBar';
import { DevContext } from '../utility/DevContext';


export const HomePage = () => {
  const context = useContext(DevContext);
  
  return (
    <>
      <Header />
      <main className='home-page'>
        <SideBar context={context} />
        <div className='some-content'>
          <p>some content</p>
        </div>
      </main>
    </>
  );
};
