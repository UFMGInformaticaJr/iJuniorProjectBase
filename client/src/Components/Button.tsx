import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface ButtonProps {
  size: string;
  onClick?: () => void;
  fontcolor?: string;
  color?: string;
  hover?: string;
  bordered?: string;
  children?: React.ReactNode;
  extraRounded?: string;
  href?: string;
  borderRadius?: string;
}

export const ButtonComponent = styled.button<ButtonProps>`
  
  width: ${(props) => props.theme.theme.button.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.button.sizes[props.size][1]};
  background-color: ${(props) => props.theme.theme.colors[props.color || "primary"]};
  font-weight: ${(props) => props.theme.theme.font?.fontWeight};
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.theme.shadows.button};
  transition: 0.4s ease-in-out;
  border-radius: ${(props) => props.borderRadius || "10px"};
  color: ${(props) => props.theme.theme.colors[props.fontcolor || (props.color + 'LightActive')]};
  

  &:hover {
    ${(props) => {
      if (props.hover == "true") {
        return css`
          background-color: ${props.theme.theme.colors};
          color: ${props.theme.theme.fontcolor};
          filter: opacity(85%);
        `;
        }
      }
    }
  }
  
  &:active {
    ${(props) =>{
      return css`
        background-color: successSolidHover;
        transform: scale(0.95);
        border: 1px solid ${props.theme.theme.colors[props.color || "primary"]};
      `;
    }}
  }
  
  &:focus {
    outline: none;
  }
  
  ${(props) => {
    if (props.bordered == "true") {
      return css`
        border: 1px solid ${props.theme.theme.colors[props.color || "primary"]};
        background-color: ${props.theme.theme.colors};
        color: ${props.theme.theme.fontcolor};
      `;
    }
    if(props.extraRounded){
      return css`
        border-radius: ${props.theme.theme.borderRadius.xr};
      `;
    }
    
  }};



  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    width: calc(${(props) => props.theme.theme.button.sizes[props.size][0]}*0.8);
    height: calc(${(props) => props.theme.theme.button.sizes[props.size][1]}*0.8);
  };
  
  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    width: calc(${(props) => props.theme.theme.button.sizes[props.size][0]}*0.65);
    height: calc(${(props) => props.theme.theme.button.sizes[props.size][1]}*0.65);
  }
`;

function Button(props: ButtonProps) {

  const handleClick = () => {
    if (props.href) {
      window.open(props.href, "_blank"); // Redireciona para a URL especificada
    }

    if (props.onClick) {
      props.onClick(); // Chama o manipulador de eventos onClick, se estiver definido
    }
  };

  return (
    <ThemeProvider theme={{ theme }}>
      <ButtonComponent
        size={props.size}
        color={props.color}
        fontcolor={props.fontcolor}
        extraRounded={props.extraRounded}
        hover={props.hover}
        bordered={props.bordered}
        onClick={handleClick}
        borderRadius={props.borderRadius}
      >
        {props.children}
      </ButtonComponent>
    </ThemeProvider>
  );
}

export default Button;
