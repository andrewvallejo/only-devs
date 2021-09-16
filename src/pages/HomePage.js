import React, { useContext } from "react";
import { Question } from "../components/Question";
import { QuestionBoard } from "../components/QuestionBoard";
import { DevContext } from "../utility/DevContext";

export const HomePage = () => {
  const { state } = useContext(DevContext);
  console.log();
  return (
    <>
      <Question question={state.question} />
      <QuestionBoard questions={state.questions} />
    </>
  )
};
