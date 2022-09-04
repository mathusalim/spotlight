import React, { useEffect, useState } from "react";
import LandingGroup from "../Components/LandingGroup/LandingGroup";
import Loading from "../Components/Loader/Loading";
import useMovieFetch from "../hooks/api/useMovieFetch";

const Landing = () => {
  const { getChunk } = useMovieFetch();
  const [movies, setMovies] = useState([]);
  useEffect(
    () => async () => {
      setMovies(await getChunk(2));
    },
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
