import React from "react";
import {
  StyledActionButton,
  StyledFullActionButton,
  StyledLeftActionButton,
  StyledRightActionButton,
} from "./ActionButton.styles";

const ActionButton = ({ children, type }) => {
  switch (type) {
    case "left":
      return <StyledLeftActionButton>{children}</StyledLeftActionButton>;
    case "right":
      return <StyledRightActionButton>{children}</StyledRightActionButton>;
    case "full":
      return <StyledFullActionButton>{children}</StyledFullActionButton>;
    default:
      return <StyledActionButton>{children}</StyledActionButton>;
  }
};

export default ActionButton;
