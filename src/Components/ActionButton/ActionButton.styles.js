import styled from "styled-components";

const StyledActionButton = styled.div`
flex: 1;
cursor: pointer;
background-color: #16302b;
padding-bottom: 0.5em;
padding-top: 0.5em;
display: flex;
justify-content: center;
align-items: center;
opacity:1
&:hover{
    opacity:0.8;
}
`

const StyledLeftActionButton = styled(StyledActionButton)`
border-radius: 20px 0px 0px 20px;
`

const StyledRightActionButton = styled(StyledActionButton)`
border-radius: 0px 20px 20px 0px;
`
const StyledFullActionButton = styled(StyledActionButton)`
border-radius: 20px;
width: 6em;
`


export { StyledRightActionButton, StyledLeftActionButton, StyledFullActionButton, StyledActionButton }