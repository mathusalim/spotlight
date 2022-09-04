import React from "react";
import {
  StyledActionButton,
  StyledFullActionButton,
  StyledLeftActionButton,
  StyledRightActionButton,
} from "./ActionButton.styles";

const ActionButton = ({ children, type, handleClick }) => {
  switch (type) {
    case "left":
      return (
        <StyledLeftActionButton
          onClick={() => {
            handleClick();
          }}
        >
          {children}
        </StyledLeftActionButton>
      );
    case "right":
      return (
        <StyledRightActionButton
          onClick={() => {
            handleClick();
          }}
        >
          {children}
        </StyledRightActionButton>
      );
    case "full":
      return (
        <StyledFullActionButton
          onClick={() => {
            handleClick();
          }}
        >
          {children}
        </StyledFullActionButton>
      );
    default:
      return (
        <StyledActionButton
          onClick={() => {
            handleClick();
          }}
        >
          {children}
        </StyledActionButton>
      );
  }
};

export default ActionButton;
