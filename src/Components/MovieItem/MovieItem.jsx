import React from "react";
import MovieItemActions from "../MovieItemActions/MovieItemActions";
import {
  StyledFlexGrow,
  StyledMovieItemContainer,
  StyledMovieItemImage,
  StyledMovieItemText,
  StyledMovieItemTextForSearch,
  StyledMovieItemTextWrapper,
} from "./MovieItem.style";

const MovieItem = ({ forLanding, movie }) => {
  return (
    <StyledMovieItemContainer>
      <StyledFlexGrow>
        <StyledMovieItemImage src={movie?.poster} />
      </StyledFlexGrow>
      <StyledMovieItemTextWrapper>
        {forLanding ? (
          <StyledMovieItemText forLanding={forLanding}>
            {movie?.title}
          </StyledMovieItemText>
        ) : (
          <StyledMovieItemTextForSearch forLanding={forLanding}>
            {movie?.title}
          </StyledMovieItemTextForSearch>
        )}
      </StyledMovieItemTextWrapper>
      <MovieItemActions id={movie.id} />
    </StyledMovieItemContainer>
  );
};

export default MovieItem;
