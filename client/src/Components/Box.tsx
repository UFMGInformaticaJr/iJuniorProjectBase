import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface BoxProps {
  size: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  extraRounded?: boolean;
  shadow?: string;
  absolute?: boolean;
  fixed?: boolean;
}

const BoxExceptionsResponsive = ["navbarFull", "navbarShort", "topbarFull", "generalContainer", "generalContainerFilterMain", "generalContainerFilter", "forms"]

const BoxComponent = styled.div<BoxProps>`
  
  width: ${(props) => props.theme.theme.box.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.box.sizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.backgroundColor || "primary"]};
  box-shadow: ${(props) => props.theme.theme.shadows[props.shadow || "none"]};
  ${(props) => {
    if (props.rounded) {
      return css`
        border-radius: ${props.theme.theme.borderRadius.r};
        `;
    }
    if (props.extraRounded) {
      return css`
        border-radius: ${props.theme.theme.borderRadius.xr};
        `;
    }
    if (props.absolute) {
      return css`
        position: absolute;
        `;
    }
    if( props.fixed ) {
      return css`
        position: fixed;
      `;
    }
  }};
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    ${(props) => {
      if(BoxExceptionsResponsive.indexOf(props.size) === -1){
        return css`
          width: calc(${props.theme.theme.box.sizes[props.size][0]}*0.8);
          height: calc(${props.theme.theme.box.sizes[props.size][1]}*0.8);
        `;

      }
    }}
  };
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    ${(props) => {
      if(BoxExceptionsResponsive.indexOf(props.size) === -1){
        return css`
          width: calc(${props.theme.theme.box.sizes[props.size][0]}*0.6);
          height: calc(${props.theme.theme.box.sizes[props.size][1]}*0.65);
        `;
      }
    }}
  };
`;

function Box(props: BoxProps) {
  return (
    <ThemeProvider theme={theme}>
      <BoxComponent
        size={props.size}
        backgroundColor={props.backgroundColor}
        rounded={props.rounded}
        extraRounded={props.extraRounded}
        shadow={props.shadow}
        absolute={props.absolute}
        fixed={props.fixed}
      >
        {props.children}
      </BoxComponent>
    </ThemeProvider>
  )
}

export default Box;