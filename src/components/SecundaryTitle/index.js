import styled, { css } from "styled-components"

export default styled.h1`
  font-size:0.9em;
  font-weight:lighter;  
  ${props => props.color && css`
    color: ${props.color}
  `}
`