import { PreNav } from '../components/navigation/PreNav';
import { SearchBar } from '../components/navigation/SearchBar';
import React, { useContext } from 'react';
import { DevContext } from '../utility/DevContext';

export const NavBar = () => {
  const { state, dispatch } = useContext(DevContext);

  return (
    <header className='nav-bar'>
      <nav className='nav-container'>
        <SearchBar questions={state.questions} dispatch={dispatch} />
        <PreNav />
      </nav>
    </header>
  );
};