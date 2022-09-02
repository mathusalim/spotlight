import React from 'react'
import { Play, Info } from 'react-feather'
import { NavLink } from 'react-router-dom'

const MovieItem = ({ forLanding, movie }) => {
  return (
    <div style={styles.movieContainerStyles()}>
      <div style={{ flex: '1' }}>
        <img src={movie?.poster} style={styles.imageStyle()} />
      </div>
      <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
        <p style={styles.textStyle(forLanding)}>{movie?.title}</p>
      </div>
      <div style={styles.actionContainer()}>
        <NavLink
          to={`details/${movie.id}`}
          style={{
            flex: '1',
            cursor: 'pointer',
            paddingBottom: '0.5em',
            backgroundColor: '#16302b',
            paddingTop: '0.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Play color="#f6511d" fill="#f6511d" />
        </NavLink>
        <div style={{ borderLeft: '2px solid #16302b' }}></div>
        <NavLink
          style={{
            flex: '1',
            cursor: 'pointer',
            backgroundColor: '#16302b',
            paddingBottom: '0.5em',
            paddingTop: '0.5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          to={`details/${movie.id}`}
        >
          <Info color="#f6511d" />
        </NavLink>
      </div>
    </div>
  )
}

const styles = {
  movieContainerStyles: (forLanding) => ({
    minWidth: '16em',
    minHeight: '440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }),
  actionContainer: () => ({
    width: '60%',
    flex: '1',
    display: 'flex',
    justifyContent: 'space-evenly',
    border: '3px solid var(--accent)',
    borderRadius: '10px',
  }),
  imageStyle: () => ({
    maxWidth: '100%',
    height: '400px',
  }),
  textStyle: (forLanding) => ({
    color: forLanding ? 'var(--secondary)' : 'var(--primary)',
    marginTop: '0.25em',
    marginBottom: '0.25em',
    fontWeight: 'bolder',
    userSelect: 'none',
  }),
}

export default MovieItem
