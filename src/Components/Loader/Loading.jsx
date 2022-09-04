import React from "react";
import { StyledLoader, StyledLoaderWrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <StyledLoaderWrapper className="container">
      <StyledLoader></StyledLoader>
      <StyledLoader></StyledLoader>
      <StyledLoader></StyledLoader>
    </StyledLoaderWrapper>
  );
};

export default Loading;
