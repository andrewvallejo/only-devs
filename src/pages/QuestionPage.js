import React, { useContext } from 'react';
import { Header } from '../components/layout/Header';
import { Question } from '../components/Question';
import { QuestionForm } from '../components/QuestionForm';
import { SideBar } from '../components/layout/SideBar';
import { DevContext } from '../utility/DevContext';

export const QuestionPage = () => {
  const context = useContext(DevContext);
  const { state, dispatch } = useContext(DevContext);

  return (
    <body>
      <Header />
      <main className='question-page'>
      <SideBar context={context} />
        <Question state={state} dispatch={dispatch} />
        <section className='main-area'>
          <QuestionForm question={state.randomQuestion} />
        </section>
      </main>
    </body>
  );
};
