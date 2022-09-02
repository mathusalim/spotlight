import React, { useEffect, useState } from 'react'
import MovieItem from '../Components/MovieItem/MovieItem'
import useMovieFetch from '../hooks/api/useMovieFetch'

const Landing = () => {
  const { getChunk } = useMovieFetch()
  const [movies, setMovies] = useState([])
  useEffect(
    () => async () => {
      setMovies(await getChunk(2))
    },
    [],
  )

  return (
    <>
      <h2 style={{ paddingBottom: '0.5em', paddingTop: '0.5em' }}>Fresh</h2>
      <div className="flex scroll">
        {movies[0]?.map((m) => (
          <MovieItem
            key={m.id}
            className="movieHolder"
            forLanding={true}
            movie={m}
          />
        ))}
      </div>
      <h2 style={{ paddingBottom: '0.5em', paddingTop: '2em' }}>Trending</h2>
      <div className="flex scroll">
        {movies[1]?.map((m) => (
          <MovieItem
            key={m.id}
            className="movieHolder"
            forLanding={true}
            movie={m}
          />
        ))}
      </div>
    </>
  )
}

export default Landing
