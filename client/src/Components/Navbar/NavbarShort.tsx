import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";

import Box from "../Box";
import Spacer from "../Spacer";
import iJuniorLogo from "../../assets/iJuniorLogo.svg";

import { BsHouse } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { ImCalendar, ImDatabase } from "react-icons/im";
import { MdLogout } from "react-icons/md";

import {
  CenterContainer,
  InternalContainerNavbar,
  LineHorizontal,
  LinkContainerNavbar,
} from "../../utils/Containers/Containers";

import { theme } from "../../styles/theme";

function NavbarShort() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Box size="navbarShort" backgroundColor="white">
        <CenterContainer>
          <InternalContainerNavbar>
            <img
              src={iJuniorLogo}
              alt="iJunior"
              style={{ width: "5rem", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <Spacer vertical="8" />
            <LineHorizontal />
            <Spacer vertical="10" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <BsHouse
                style={{
                  cursor: "pointer",
                  width: "1.875rem",
                  height: "1.875rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/general-container")}
              />
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <ImDatabase
                style={{ cursor: "pointer", width: "1.6rem", height: "1.6rem" }}
                color={theme.colors.primary}
                onClick={() =>
                  navigate("/general-filter-container/dados-gerais")
                }
              />
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar style={{ justifyContent: "center" }}>
              <ImCalendar
                style={{ cursor: "pointer", width: "1.6rem", height: "1.6rem" }}
                color={theme.colors.primary}
                onClick={() => navigate("/buttons")}
              />
            </LinkContainerNavbar>
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <MdLogout
              size="1.5rem"
              color={theme.colors.greyDark}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </InternalContainerNavbar>
        </CenterContainer>
      </Box>
    </>
  );
}

export default NavbarShort;
