import React from "react";
import { Play, Info } from "react-feather";
import { useNavigate } from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import { setHidden } from "../../features/search/searchPanel";
import {
  StyledActionContainer,
  StyledActionDivider,
} from "./MovieItemActions.styles";

const MovieItemActions = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = () => {
    dispatch(setHidden());
    navigate(`details/${id}`);
  };

  const handlePresent = () => {
    dispatch(setHidden());
    navigate(`present/${id}`);
  };

  return (
    <StyledActionContainer>
      <ActionButton type="left" handleClick={() => handlePresent()}>
        <Play color="#f6511d" />
      </ActionButton>
      <StyledActionDivider></StyledActionDivider>
      <ActionButton type="right" handleClick={() => handleDetails()}>
        <Info color="#f6511d" />
      </ActionButton>
    </StyledActionContainer>
  );
};

export default MovieItemActions;
