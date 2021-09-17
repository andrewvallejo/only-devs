import React from 'react';

export const Header = () => {
  const image = 'https://i.imgur.com/i6f9tQA.png';
  
  return (
    <header className='main-header'>
      <img className='logo' src={image} alt='onlyDevs logo' />
    </header>
  )
};