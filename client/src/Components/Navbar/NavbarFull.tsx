import { useEffect, useState } from "react";
import useScreen from "../../hooks/useScreen";
import { Outlet } from "react-router-dom";

import { theme } from "../../styles/theme";

import NavbarShort from "./NavbarShort";
import NavbarGeneral from "./NavbarGeneral";

function NavbarFull() {
  const screen = useScreen();

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
      {isMobile ? (
        <>
          <div style={{ display: "flex" }}>
            <NavbarShort />
            <Outlet />
          </div>
        </>
      ) : (
          <div style={{ display: "flex" }}>
            <NavbarGeneral />
            <Outlet />
          </div>
      
      )}
      
    </>
  );
}

export default NavbarFull;
