import styled from "styled-components";

const StyledPageTitle = styled.h1`
  color: var(--warning);
  user-select: none;
  letter-spacing: 0.5rem;
`;

const StyledHeader = styled.div`
  min-height: 2em;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--accent);
`;

export { StyledPageTitle, StyledHeader };
