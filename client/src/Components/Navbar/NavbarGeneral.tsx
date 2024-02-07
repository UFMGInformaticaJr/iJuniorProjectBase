import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useScreen from "../../hooks/useScreen";
import { theme } from "../../styles/theme";

import Link from "../Link";
import Spacer from "../Spacer";
import Text from "../Text";

import iJuniorLogo from "../../assets/iJuniorLogo.svg";

import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ImCalendar, ImDatabase } from "react-icons/im";
import { MdLogout } from "react-icons/md";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import {
  CenterContainer,
  FooterContainerNavbar,
  InternalContainerNavbar,
  InternalFooterContainerNavbar,
  LineHorizontal,
  LineVertical,
  LinkContainerNavbar,
  //MainContainer,
} from "../../utils/Containers/Containers";

function NavbarGeneral() {
  const navigate = useNavigate();
  const location = useLocation();
  const screen = useScreen();

  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMouseOverNavbar, setIsMouseOverNavbar] = useState(false);

  //fazer função genérica para loggout
  const loggout = () => {
    // coloque sua lógica para loggout aqui
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleMouseEnter = () => {
    setIsMouseOverNavbar(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverNavbar(false);
  };

  useEffect(() => {
    setIsMobile(
      screen <
        Number(
          theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))
        ) *
          16
    );
  }, [screen]);

  return (
    <>
      <div
        style={{
          width: isMobile ? "3rem" : isNavbarOpen ? "16.125rem" : "8rem",
          overflowX: isNavbarOpen ? "visible" : "hidden",
          transition: "width 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
            <LinkContainerNavbar>
              <Spacer horizontal="4" />
              <BsHouse
                style={{
                  cursor: "pointer",
                  width: "1.875rem",
                  height: "1.875rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/")}
              />
              {isMobile && (
                <Text
                  variant="legenda"
                  color="greyDark"
                  hover="true"
                  bold="true"
                >
                  General
                </Text>
              )}
              {isNavbarOpen && (
                <>
                  <Spacer horizontal="4" />
                  <Link path="/">
                    <Text
                      variant="legenda"
                      color="greyDark"
                      hover="true"
                      bold="true"
                    >
                      General Container
                    </Text>
                  </Link>
                  {location.pathname.indexOf("/home") !== -1 && (
                    <LineVertical color="primary" weight="4" />
                  )}
                </>
              )}
            </LinkContainerNavbar>

            <Spacer vertical="12" />
            <LinkContainerNavbar>
              <Spacer horizontal="6" />
              <ImDatabase
                style={{
                  cursor: "pointer",
                  width: "1.6rem",
                  height: "1.6rem",
                }}
                color={theme.colors.primary}
                onClick={() =>
                  navigate("/general-filter-container/dados-gerais")
                }
              />
              {isNavbarOpen && (
                <>
                  <Spacer horizontal="6" />
                  <Link path="/general-filter-container/dados-gerais">
                    <Text
                      variant="legenda"
                      color="greyDark"
                      hover="true"
                      bold="true"
                    >
                      General Filter Container
                    </Text>
                  </Link>
                  {location.pathname.indexOf("general-filter-container") !==
                    -1 && <LineVertical color="primary" weight="4" />}
                </>
              )}
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar>
              <Spacer horizontal="4" />
              <ImCalendar
                style={{
                  cursor: "pointer",
                  width: "1.875rem",
                  height: "1.875rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/buttons")}
              />

              {isNavbarOpen && (
                <>
                  <Spacer horizontal="4" />
                  <Link path="/login">
                    <Text
                      variant="legenda"
                      color="greyDark"
                      hover="true"
                      bold="true"
                    >
                      Login Page Redirect
                    </Text>
                  </Link>
                  {location.pathname.indexOf("login") !== -1 && (
                    <LineVertical color="primary" weight="4" />
                  )}
                </>
              )}
            </LinkContainerNavbar>
            <Spacer vertical="40" />

            {isMouseOverNavbar && (
              <div
                onClick={toggleNavbar}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0",
                  margin: "0 auto",
                  position: "absolute",
                  top: "90%",
             
                }}
                title="Fechar menu"
              >
                {isNavbarOpen ? (
                  <KeyboardDoubleArrowLeftIcon
                    style={{
                      width: "3.875rem",
                      height: "3.875rem",
                      color: theme.colors.primary,
                    }}
                  />
                ) : (
                  <KeyboardDoubleArrowRightIcon
                    style={{
                      width: "3.875rem",
                      height: "3.875rem",
                      color: theme.colors.primary,
                    }}
                  />
                )}
              </div>
            )}

            <Spacer vertical="40" />
            <Spacer vertical="40" />

            {isNavbarOpen && (
              <>
                <FooterContainerNavbar>
                  <FaUserCircle
                    size="1.66rem"
                    color={theme.colors.greyDarkLightHover}
                  />
                  <Spacer horizontal="4" />
                  <InternalFooterContainerNavbar>
                    <Text variant="legenda" color="greyDark" bold="true">
                      Nome do Usuário
                    </Text>
                    <Link path="/">
                      <Text variant="legenda2" color="greyDark" hover="true">
                        Ver perfil
                      </Text>
                    </Link>
                  </InternalFooterContainerNavbar>
                  <Spacer horizontal="5" />
                  <MdLogout
                    size="1rem"
                    color={theme.colors.grey}
                    style={{ cursor: "pointer" }}
                    onClick={() => loggout()}
                  />
                </FooterContainerNavbar>
              </>
            )}

            {!isNavbarOpen && (
              <div
                onClick={toggleNavbar}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0",
                  margin: "0 auto",
                }}
              >
                <MdLogout
                  size="1.875rem"
                  color={theme.colors.primary}
                  style={{ cursor: "pointer" }}
                  onClick={() => loggout()}
                />
              </div>
            )}
          </InternalContainerNavbar>
        </CenterContainer>
      </div>
    </>
  );
}

export default NavbarGeneral;
