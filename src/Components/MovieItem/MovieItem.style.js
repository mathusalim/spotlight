import styled from "styled-components";

const StyledMovieItemContainer = styled.div`
  min-width: 16em;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledFlexGrow = styled.div`
  flex: 1;
`;

const StyledMovieItemImage = styled.img`
  max-width: 100%;
  height: 400px;
`;

const StyledMovieItemTextWrapper = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
`;

const StyledMovieItemText = styled.p`
  color: var(--secondary);
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  font-weight: bolder;
  user-select: none;
`;

const StyledMovieItemTextForSearch = styled(StyledMovieItemText)`
  color: var(--primary);
`;

export {
  StyledMovieItemContainer,
  StyledFlexGrow,
  StyledMovieItemImage,
  StyledMovieItemTextWrapper,
  StyledMovieItemText,
  StyledMovieItemTextForSearch,
};
