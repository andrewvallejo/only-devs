import { useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchBar = ({ questions }) => {
  const [query, setQuery] = useState('')

  const entries = questions
    .filter(
      ({ question }) =>
        (!question || question.toLowerCase().includes(query.toLowerCase())) &&
        question
    )
    .map(({ question, id }) => (
      <li className="search-query" key={id}>
        <Link to={`/questions/${id}`}>{question}</Link>
      </li>
    ))

  const clearInput = (event) => {
    event.preventDefault()
    setQuery('')
  }

  return (
    <form className="search-bar">
      <label htmlFor="searchBar">
        <span>Search Interview Questions</span>
      </label>
      <input
        id="searchBar"
        type="text"
        value={query}
        placeholder="Search Interview Questions"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <ul name="questions" className="question-list">
          {entries}
        </ul>
      )}
      <button
        className={query ? 'close-icon' : 'search-icon'}
        onClick={clearInput}>
        {query ? (
          <ion-icon name="close-circle-outline" />
        ) : (
          <ion-icon name="search-circle-outline" />
        )}
      </button>
    </form>
  )
}
