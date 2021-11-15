import React, { useContext } from 'react';
import { Header } from '../components/layout/Header';
import { Question } from '../components/Question';
import { QuestionForm } from '../components/QuestionForm';
import { SideBar } from '../components/layout/SideBar';
import { DevContext } from '../utility/DevContext';

export const QuestionPage = () => {
  const context = useContext(DevContext);
  const { state, dispatch } = useContext(DevContext);

/* 
 » Make sure the question reloads if the page refreshes «
  1. Add dispatch for save current page to local storage 
  1. Add dispatch to check local if a pageURL exists
    - If it does, load page
    - If it doesn't, then navigate home
*/

  return (
    <>
      <Header />
      <main className='question-page'>
        <SideBar context={context} />
        <section className='main-area'>
        <Question state={state} dispatch={dispatch} />
          <QuestionForm question={state.randomQuestion} />
        </section>
      </main>
    </>
  );
};
