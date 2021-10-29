import { useState } from "react";

export const SearchBar = ({ questions }) => {
  const [query, setQuery] = useState('');

  const questionList = questions.filter(({ question }) =>
    (!question || question.toLowerCase().includes(query.toLowerCase())) && question)
    .map(({ question }, i) => <p key={i}>{question}</p>);

  return (
    <form >
      <label htmlFor='search-bar'>
        <span className='aria-hidden'>Search Interview Questions</span>
      </label>
      <input
        id='searchBar'
        type='text'
        value={query}
        placeholder='Search Interview Questions'
        onChange={(e) => setQuery((e.target.value))} />
      {query && questionList}
      <button type='submit'>Search</button>
    </form >
  );
}