import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

interface ColumnProps {
  children?: React.ReactNode;
  grid?: number;
}

const ColumnComponent = styled.div<ColumnProps>`
  float: left;
  padding: .5rem 1rem .5rem 1rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.theme.breakpoints.t}) {
    width: ${props => props.grid ? props.grid / 12 * 100 : 8.33}%;
  }

`;

function Column(props: ColumnProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColumnComponent 
        grid={props.grid}>
          {props.children}
      </ColumnComponent>
    </ThemeProvider>
  );
}

export default Column;
