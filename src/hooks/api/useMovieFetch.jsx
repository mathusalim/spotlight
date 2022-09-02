import { useOMDBApi } from './useOMDBApi'
import { mockGet, getMockChunk } from '../../Services/mock.api.service'

const useMovieFetch = () => {
  const { get } = useOMDBApi()

  const getMovieDetails = (id) => {
    return get('http://www.omdbapi.com/', { i: id })
  }

  const getPoster = (id) => {
    return get('http://img.omdbapi.com/', { i: id })
  }

  const searchMovies = (filter) => {
    // faking api delay
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(mockGet(filter))
      }, 1500)
    })
  }

  const getChunk = (num) => {
    // faking api delay
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(getMockChunk(num))
      }, 1500)
    })
  }

  return { getMovieDetails, getPoster, searchMovies, getChunk }
}

export default useMovieFetch
