import React, { useEffect, useState } from "react";
import LandingGroup from "../Components/LandingGroup/LandingGroup";
import Loading from "../Components/Loader/Loading";
import useMovieFetch from "../hooks/api/useMovieFetch";

const Landing = () => {
  const { getChunk } = useMovieFetch();
  const [movies, setMovies] = useState([]);
  useEffect(
    () => setMovies(getChunk(2).then((movies) => setMovies(movies))),

    []
  );

  return movies.length > 0 ? (
    <>
      <LandingGroup movies={movies[0]} title="Fresh"></LandingGroup>
      <LandingGroup movies={movies[1]} title="Trending"></LandingGroup>
    </>
  ) : (
    <Loading></Loading>
  );
};

export default Landing;
