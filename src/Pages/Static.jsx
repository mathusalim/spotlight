import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import SearchResult from '../Components/SearchResult'
import useMovieFetch from '../hooks/api/useMovieFetch'

const Static = () => {
  const { searchMovies } = useMovieFetch()
  const handleSearch = (term) => {
    const result = searchMovies((x) => {
      return x.Title.toLowerCase().includes(term.toLowerCase())
    })
    setResults((prev) => ({ ...prev, showResult: true }))
    result.then((d) =>
      setResults((prev) => ({
        ...prev,
        data: { movies: d.movies, count: d.count },
      })),
    )
  }

  const [results, setResults] = useState({
    showResult: false,
    data: { movies: [], count: 0 },
  })

  useEffect(() => {}, [results])

  return (
    <>
      <Header search={handleSearch} />
      {results.showResult && <SearchResult data={results.data} />}
    </>
  )
}

export default Static
