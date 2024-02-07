import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri"; // Importe os ícones necessários
import styled, { ThemeProvider, css } from "styled-components";
import { theme } from "../styles/theme";

interface InputProps {
  size: string;
  type: string;
  placeholder: string;
  center?: string;
  suffix?: React.ReactNode;
  list?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  fontcolor?: string;
  disabled?: string;
  background?: string;
  paddingLeft?: string;
  border?: string;
  maxLength?: string;
}

const InputExceptionsResponsive = ["forms"];

const InputComponent = styled.input.attrs((props) => {
  props.type;
})<InputProps>`
  width: ${(props) => props.theme.theme.input.sizes[props.size][0]};
  height: ${(props) => props.theme.theme.input.sizes[props.size][1]};
  border: ${(props) => props.border || "none"};
  border-radius: 10px;
  background-color: ${(props) => props.theme.theme.colors["greyLight"]};
  background: ${(props) =>
    props.theme.theme.colors[props.background || "greyLight"]};
  padding: 20px;
  padding-left: ${(props) => props.paddingLeft};
  font-size: ${(props) => props.theme.theme.input.placeholderSizes[props.size]};
  color: ${(props) => props.fontcolor || "inherit"};
  ${(props) =>
    props.disabled == "true" &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  &:focus {
    outline: none;
    border: 2px solid black; /* Adicionar a borda quando o input estiver em foco */
  }

  &::placeholder {
    position: relative;
    color: ${(props) => props.theme.theme.colors["grey"]};
    font-size: ${(props) =>
      props.theme.theme.input.placeholderSizes[props.size]};
    white-space: pre-line;
    ${(props) => {
      if (props.center == "true") {
        return css`
          top: 0;
        `;
      } else {
        return css`
          top: -35%;
        `;
      }
    }};
  }

  @media (max-width: ${(props) => props.theme.theme.breakpoints.t}) {
    ${(props) => {
      if (InputExceptionsResponsive.indexOf(props.size) === -1) {
        return css`
          width: calc(${props.theme.theme.input.sizes[props.size][0]}*0.8);
          height: calc(${props.theme.theme.input.sizes[props.size][1]}*0.8);
          font-size: calc(
            ${props.theme.theme.input.placeholderSizes[props.size]}*0.8
          );
          &::placeholder {
            font-size: calc(
              ${props.theme.theme.input.placeholderSizes[props.size]}*0.8
            );
          }
        `;
      }
    }}
  }

  @media (max-width: ${(props) => props.theme.theme.breakpoints.ml}) {
    ${(props) => {
      if (InputExceptionsResponsive.indexOf(props.size) === -1) {
        return css`
          width: calc(${props.theme.theme.input.sizes[props.size][0]}*0.6);
          height: calc(${props.theme.theme.input.sizes[props.size][1]}*0.6);
          font-size: calc(
            ${props.theme.theme.input.placeholderSizes[props.size]}*0.6
          );
          &::placeholder {
            font-size: calc(
              ${props.theme.theme.input.placeholderSizes[props.size]}*0.6
            );
          }
        `;
      }
    }}
  }
  ${(props) =>
    props.suffix &&
    css`
      padding-right: 40px; // Espaço para a largura do ícone
    `}
`;

function Input(props: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <ThemeProvider theme={theme}>
      <InputComponent
        size={props.size}
        type={passwordVisible ? "text" : props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        center={props.center}
        suffix={
          props.type === "password" ? (
            <button type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          ) : (
            props.suffix
          )
        }
        list={props.list}
        id={props.id}
        value={props.value}
        fontcolor={props.fontcolor}
        disabled={props.disabled}
        background={props.background}
        paddingLeft={props.paddingLeft}
        border={props.border}
        maxLength={props.maxLength}
      />
    </ThemeProvider>
  );
}

export default Input;
