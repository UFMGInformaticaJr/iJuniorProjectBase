import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface TextProps {
  variant: string;
  children?: React.ReactNode;
  bold?: string;
  miniBold?: string;
  color?: string;
  onClick?: () => void;
  center?: string;
  justify?: boolean;
  hover?: string;
  underlined?: string;
  opacity?: string;
  whiteSpace?: string;
  lineHeight?: string;
  gradient?: string;
}

export const TextComponent = styled.p<TextProps>`
  font-size: ${(props) =>
    props.theme.theme.text[props.variant || "h3"].fontSize};
  line-height: ${(props) =>
    props.theme.theme.text[props.variant || "h3"].lineHeight};
  font-family: ${(props) => props.theme.theme.text.fontFamily};
  color: ${(props) => props.theme.theme.colors[props.color || "none"]};
  opacity: ${(props) => props.opacity || 1};
  white-space: ${(props) => props.whiteSpace || "normal"};
  transition: 0.4s ease-in-out;
  text-decoration: ${(props) => {
    if (props.underlined == "true") {
      return "underline";
    }
  }};

  &:hover {
    ${(props) => {
    if (props.hover == "true") {
      return css`
          cursor: pointer;
          color: ${props.theme.theme.colors[props.color + "LightHover"]};
        `;
    }
  }}
  }

  ${(props) => {
    if (props.bold == "true") {
      return css`
        font-weight: bold;
      `;
    }
    if (props.miniBold == "true") {
      return css`
        font-weight: 500;
        line-height: 140%;
      `;
    }
    if (props.justify) {
      return css`
        text-align: justify;
      `;
    }
    if (props.center == "string") {
      return css`
        text-align: center;
      `;
    }
    if (props.gradient == "true") {
      return css`
        background: ${props.theme.theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
    }
  }};

  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    font-size: calc(
      ${(props) => props.theme.theme.text[props.variant || "h3"].fontSize}*0.8
    );
  }

  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    font-size: calc(
      ${(props) => props.theme.theme.text[props.variant || "h3"].fontSize}*0.6
    );
  }
`;

function Text(props: TextProps) {
  return (
    <ThemeProvider theme={theme}>
      <TextComponent
        variant={props.variant}
        bold={props.bold}
        miniBold={props.miniBold}
        color={props.color}
        onClick={props.onClick}
        center={props.center}
        justify={props.justify}
        hover={props.hover}
        underlined={props.underlined}
        opacity={props.opacity}
        whiteSpace={props.whiteSpace}
        gradient={props.gradient}
      >
        {props.children}
      </TextComponent>
    </ThemeProvider>
  );
}

export default Text;
