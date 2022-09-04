import styled, { keyframes } from "styled-components";

const StyledLoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
`;

const wiggle = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }

  15% {
    transform: translateX(-30px) rotate(-6deg);
  }

  30% {
    transform: translateX(15px) rotate(6deg);
  }

  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }

  60% {
    transform: translateX(9px) rotate(2.4deg);
  }

  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }`;


const StyledLoader = styled.div`
  width: 2em;
  height: 2em;
  background-color: var(--warning);
  animation: ${wiggle} 1s cubic-bezier(0.32, 0, 0.67, 0) 0s infinite normal
    forwards;
`;



export { StyledLoaderWrapper, StyledLoader };
