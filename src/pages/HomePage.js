import React, { useContext } from "react";
import { QuestionForm } from "../components/QuestionForm";
import { QuestionBoard } from "../components/QuestionBoard";
import { DevContext } from "../utility/DevContext";
import { Header } from "../components/Header";

export const HomePage = () => {
  const { state } = useContext(DevContext);

  return (
    <>
      <Header />
      <QuestionForm question={state.question} />
      <QuestionBoard questions={state.questions} />
    </>
  )
};
