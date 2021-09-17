import React, { useContext } from "react";
import { QuestionForm } from "../components/QuestionForm";
import { QuestionBoard } from "../components/QuestionBoard";
import { DevContext } from "../utility/DevContext";

export const HomePage = () => {
  const { state, dispatch } = useContext(DevContext);

  return (
    <>
      <QuestionForm question={state.randomQuestion} />
      <QuestionBoard state={state} dispatch={dispatch} />
    </>
  )
};
