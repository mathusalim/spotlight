import React, { useEffect, useState } from "react";
import { Play } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ActionButton from "../Components/ActionButton/ActionButton";
import useMovieFetch from "../hooks/api/useMovieFetch";
import Loading from "../Components/Loader/Loading";
import DetailsTextContainer from "../Components/ProductDetails/DetailsTextContainer";
import DetailsGenre from "../Components/ProductDetails/DetailsGenre";
import { setHidden } from "../features/search/searchPanel";

const ProductDetails = () => {
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const { getMovieDetails } = useMovieFetch();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleClick = () => {
    navigate(`/present/${id}`);
  };

  useEffect(() => {
    getMovieDetails(id).then((movie) => {
      dispatch(setHidden());
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
              <ActionButton type="full" handleClick={handleClick.bind(this)}>
                <Play color="#f6511d" />
              </ActionButton>
            </div>
          </DetailsTextContainer>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
