import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { StyledGroupText } from "./LandingGroup.styles";

const LandingGroup = ({ movies, title }) => {
  return (
    <>
      <StyledGroupText>{title}</StyledGroupText>
      <div className="flex scroll">
        {movies?.map((m) => (
          <MovieItem
            key={m.id}
            className="movieHolder"
            forLanding={true}
            movie={m}
          />
        ))}
      </div>
    </>
  );
};

export default LandingGroup;
