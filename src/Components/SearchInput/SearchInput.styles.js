import styled from "styled-components";

const StyledSearchInput = styled.input`
  max-width: 12rem;
  text-align: center;
  padding: 0.5em;
  border: 0;
  font-size: 1.25rem;
  letter-spacing: 0.25rem;
  color: var(--secondary);
  font-weight: 600;
  outline: none;
  border-radius: 1rem;
  display: flex;
  background-color: var(--primary);
  &::-webkit-input-placeholder {
    color: var(--secondary);
  }
`;

export { StyledSearchInput };
