import { useEffect, useState } from "react";
import useScreen from "../../hooks/useScreen";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Login from "../AccessContainer/Login/Login";
import TopbarFull from "./TopbarFull";
import TopbarMobile from "./TopbarMobile";

import { CenterContainer } from "../../utils/Containers/Containers";

function TopbarExample() {

  const screen = useScreen();

  const [componentTopBarMobile, setComponentTopBarMobile] = useState(false);
  const updateTopBarMobile = (r: any) => setComponentTopBarMobile(r);
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(
    () =>
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setIsMobile(true)
        : setIsMobile(false),
    [screen]
  );

  return (
    <>
      <GlobalStyle />
      {componentTopBarMobile && isMobile ? (
        <TopbarMobile handleTopBarMobile={updateTopBarMobile}/>
      ) : (
        <>
          <TopbarFull handleTopBarMobile={updateTopBarMobile}/>
          <CenterContainer
            style={{ backgroundColor: `${theme.colors.offWhite}` }}
          >
            <Login />
          </CenterContainer>
        </>
      )}
    </>
  );
}

export default TopbarExample;
