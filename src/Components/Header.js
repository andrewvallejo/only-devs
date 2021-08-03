import React from 'react';
import { NavLink } from 'react-router-dom';


export const  Header = () => {
  return (
    <header className='main-header'>
      <NavLink  to='/'>
        <img className='logo' src='https://i.imgur.com/i6f9tQA.png' alt='only-devs logo' id='onlyDevsLogo'></img>
      </NavLink>
    </header>
  )
}