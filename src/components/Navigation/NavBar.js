import React from 'react';
import { PreNav } from './PreNav';
import { SearchBar } from './SearchBar';

export const NavBar = () => {
  return (
    <header className='NavBar'>
      <nav className='nav-container'>
        <SearchBar />
        <PreNav />
      </nav>
    </header>
  );
};