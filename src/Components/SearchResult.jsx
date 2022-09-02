import React from 'react'
import MovieItem from './MovieItem/MovieItem'

const SearchResult = ({ data }) => {
  return (
    <div className="search-result-container">
      {data.movies?.length > 0 && (
        <div className="container flex scroll">
          {data.movies.map((item) => (
            <MovieItem key={item.id} movie={item} className="movieHolder" />
          ))}
        </div>
      )}
      {data.movies?.length === 0 && (
        <div className="container loader-container">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
      )}
    </div>
  )
}

export default SearchResult
