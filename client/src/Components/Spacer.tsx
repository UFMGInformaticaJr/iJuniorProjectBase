import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface SpacerProps {
  horizontal?: string;
  vertical?: string;
}

const SpacerComponent = styled.div<SpacerProps>`
  ${(props) => {
    if (props.horizontal) {
      return css`
        width: ${props.theme.theme.spacing[props.horizontal]};
        height: 0;
      `;
    }
    if (props.vertical) {
      return css`
        width: 0;
        height: ${props.theme.theme.spacing[props.vertical]};
      `;
    }
  }}
`;

function Spacer(props: SpacerProps) {
  return (
    <ThemeProvider theme={theme}>
      <SpacerComponent
        horizontal={props.horizontal}
        vertical={props.vertical}
      />
    </ThemeProvider>
  );
}

export default Spacer;
