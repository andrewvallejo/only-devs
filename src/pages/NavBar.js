import { PreNav } from '../components/navigation/PreNav';
import { SearchBar } from '../components/navigation/SearchBar';
import React, { useContext } from 'react';
import { DevContext } from '../utility/DevContext';

export const NavBar = () => {
  const { state } = useContext(DevContext);

  return (
    <header className='NavBar'>
      <nav className='nav-container'>
        <SearchBar questions={state.questions} />
        <PreNav />
      </nav>
    </header>
  );
};