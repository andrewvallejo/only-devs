import React, { useContext } from 'react';

import { DevContext } from '../../utility/DevContext';
import { NavBar } from '../NavBar';
import { SearchBar } from '../SearchBar';

export const Header = () => {
  const { state, dispatch } = useContext(DevContext);

  return (
    <header className='nav-bar'>
      <nav className='nav-container'>
        <SearchBar questions={state.questions} dispatch={dispatch} />
        <NavBar />
      </nav>
    </header>
  );
};