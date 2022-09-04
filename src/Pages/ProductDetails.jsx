import React, { useEffect, useState } from "react";
import { Play } from "react-feather";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHidden } from "../features/search/searchPanel";
import ActionButton from "../Components/ActionButton/ActionButton";
import useMovieFetch from "../hooks/api/useMovieFetch";
import Loading from "../Components/Loader/Loading";
import DetailsTextContainer from "../Components/ProductDetails/DetailsTextContainer";
import DetailsGenre from "../Components/ProductDetails/DetailsGenre";

const ProductDetails = () => {
  const [movie, setMovie] = useState();
  const { getMovieDetails } = useMovieFetch();
  const { dispatch } = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <>
      {!movie ? (
        <Loading></Loading>
      ) : (
        <div className="flex" style={{ alignItems: "start" }}>
          <img src={movie.Poster} style={{ maxWidth: "100%" }} />
          <DetailsTextContainer>
            <h1>
              {movie.Title} ({movie.Year})
            </h1>
            <h3>{movie.Country}</h3>
            <div className="flex wrap">
              {movie.Genre.split(",").map((g) => (
                <DetailsGenre key={g} genre={g}></DetailsGenre>
              ))}
            </div>

            <h3>
              <span>Director : </span>
              {movie.Director}
            </h3>
            <h3>
              <span>Actors : </span>
              {movie.Actors}
            </h3>
            <p>{movie.Plot}</p>
            <div className="flex">
              <h2>{movie.Runtime}</h2>
              <ActionButton type="full">
                <NavLink
                  to={`peresent/${id}`}
                  replace={true}
                  onClick={() => {
                    dispatch(setHidden);
                  }}
                >
                  <Play color="#f6511d" />
                </NavLink>
              </ActionButton>
            </div>
          </DetailsTextContainer>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
