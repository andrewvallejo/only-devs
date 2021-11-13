import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { QuestionPage } from './pages/QuestionPage';
import { DevContext } from './utility/DevContext';
import { reducer } from './utility/reducer';

const initialState = {
  questions: [],
  randomQuestion: [],
  selectedQuestion: [],
  answers: [],
  error: '',
  isLoaded: false
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DevContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/questions/*' element={<QuestionPage />} />
      </Routes>
    </DevContext.Provider>
  );
};