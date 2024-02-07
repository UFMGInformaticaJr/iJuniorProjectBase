import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

interface RowProps {
  children: React.ReactNode;
}

const RowComponent = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display : table;
  }
  &:after {
    clear: both;
  };
`;

function Row(props: RowProps) {
  return (
      <ThemeProvider theme={theme}>
        <RowComponent>
          {props.children}
        </RowComponent>
      </ThemeProvider>
    )
}

export default Row