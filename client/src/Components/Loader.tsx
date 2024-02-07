import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

import { MainContainerLoader } from "../utils/Containers/Containers";

interface LoaderProps {
  color: string;
  size: string;
  transition?: string;
}

const LoaderComponent = styled.div<LoaderProps>`
  
  width: ${(props) => props.theme.theme.loader.sizes[props.size]};
  height: ${(props) => props.theme.theme.loader.sizes[props.size]};
  border-radius: 50%;
  border: ${(props) => props.theme.theme.loader.border[props.size]} solid ${(props) => props.theme.theme.colors.greyLight};
  border-top: ${(props) => props.theme.theme.loader.border[props.size]} solid ${(props) => props.theme.theme.colors[props.color]};
  
  ${(props) => {
    if(props.transition){
      return css `
        animation: spin 1s ${props.transition} infinite;
      `;
    }
    else{
      return css `
        animation: spin 1s ease infinite;
      `;
    }
  }}

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  };
`;

function Loader(props: LoaderProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainContainerLoader>
        <LoaderComponent 
          color={props.color} 
          size={props.size} 
          transition={props.transition} />
      </MainContainerLoader>
    </ThemeProvider>
  );
}

export default Loader;
