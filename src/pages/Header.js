import React, { useContext } from 'react';
import { NavBar } from '../components/Navigation/NavBar';
import { DevContext } from '../utility/DevContext';

export const Header = () => {
  const { state, dispatch } = useContext(DevContext);
  const {questions} = state
  return (
    <header>
      <NavBar questions={questions}/> 
    </header>
  )
};
