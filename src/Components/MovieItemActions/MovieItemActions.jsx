import React from "react";
import { Play, Info } from "react-feather";
import { NavLink } from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import { setHidden } from "../../features/search/searchPanel";
import {
  StyledActionContainer,
  StyledActionDivider,
} from "./MovieItemActions.styles";

const MovieItemActions = ({ id }) => {
  const { dispatch } = useDispatch();

  return (
    <StyledActionContainer>
      <ActionButton type="left">
        <NavLink
          to={`present/${id}`}
          onClick={() => {
            dispatch(setHidden);
          }}
        >
          <Play color="#f6511d" />
        </NavLink>
      </ActionButton>
      <StyledActionDivider></StyledActionDivider>
      <ActionButton type="right">
        <NavLink
          to={`details/${id}`}
          onClick={() => {
            dispatch(setHidden);
          }}
        >
          <Info color="#f6511d" />
        </NavLink>
      </ActionButton>
    </StyledActionContainer>
  );
};

export default MovieItemActions;
