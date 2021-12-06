import React, { useState } from 'react'

import { QuestionCard } from '../components/QuestionCard'

export const SideBar = ({ context }) => {
  const [active, setActive] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setActive(!active)
  }

  const questionList = context.state.questions.map((question) => {
    return (
      <li key={question.id} className={!active && 'aria-hidden'}>
        <QuestionCard context={context} question={question} />
      </li>
    )
  })

  return (
    <section className="side-bar">
      <button onClick={(e) => handleClick(e)}>expand</button>
      <ul className="question-choices">{questionList}</ul>
    </section>
  )
}
