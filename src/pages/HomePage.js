import React, { useContext, useEffect } from 'react';

import { SideBar } from '../components/layout/SideBar';
import { getQuestions } from '../utility/apiCalls';
import { DevContext } from '../utility/DevContext';
import { randomize } from '../utility/util';
import { Header } from '../components/layout/Header';

export const HomePage = () => {
  const context = useContext(DevContext);
  const { state, dispatch } = context

  useEffect(() => {
    (async () => !state.questions.length &&
      await getQuestions().then(data => {
        dispatch({ state, action: { type: 'SETQUESTIONS', value: data } });
        dispatch({ state, action: { type: 'SETRANDOMQUESTION', value: randomize(data) } });
      })
    )();
  }, [dispatch, state]);

  return (
    <body>
      <Header />
      <main className='home-page'>
      <SideBar context={context} />
      </main>
    </body>
  );
};
