import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

import Box from "../Box";
import Button from "../Button";
import Link from "../Link";
import Spacer from "../Spacer";
import Text from "../Text";

import { FaReact } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  BottomBarTopbar,
  CenterContainerFlex,
  InternalContainerTopbar,
  LinkContainerTopbar,
} from "../../utils/Containers/Containers";

interface TopbarFullProps {
  handleTopBarMobile?: (r: any) => void;
}

function TopbarFull(props: TopbarFullProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const screen = useScreen();

  const handleTopBarMobileFather = () =>
    props.handleTopBarMobile ? props.handleTopBarMobile(true) : null;

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
      <Box size="topbarFull" backgroundColor="greyLight" fixed>
        <InternalContainerTopbar>
          <CenterContainerFlex>
            <FaReact
              style={{
                cursor: "pointer",
                width: "3rem",
                height: "3rem",
              }}
              color={theme.colors.primary}
              onClick={() => navigate("/")}
            />
          </CenterContainerFlex>
          {!isMobile ? (
            <CenterContainerFlex>
              {location.pathname.indexOf("short") !== -1 ? (
                <LinkContainerTopbar>
                  <Link path="/topbar/mobile">
                    <Text variant="body2" hover="true" bold="true">
                      Mobile
                    </Text>
                  </Link>
                  <BottomBarTopbar color="primary" />
                </LinkContainerTopbar>
              ) : (
                <Link path="/topbar/mobile">
                  <Text variant="body2" hover="true">
                    Mobile
                  </Text>
                </Link>
              )}
              <Spacer horizontal="9" />
              {location.pathname.indexOf("full") !== -1 ? (
                <LinkContainerTopbar>
                  <Link path="/topbar/full">
                    <Text variant="body2" hover="true" bold="true">
                      Full
                    </Text>
                  </Link>
                  <BottomBarTopbar color="primary" />
                </LinkContainerTopbar>
              ) : (
                <Link path="/topbar/full">
                  <Text variant="body2" hover="true">
                    Full
                  </Text>
                </Link>
              )}
              <Spacer horizontal="9" />
              {location.pathname.indexOf("example") !== -1 ? (
                <LinkContainerTopbar>
                  <Link path="/topbar/example">
                    <Text variant="body2" hover="true" bold="true">
                      Exemplo
                    </Text>
                  </Link>
                  <BottomBarTopbar color="primary" />
                </LinkContainerTopbar>
              ) : (
                <Link path="/topbar/example">
                  <Text variant="body2" hover="true">
                    Exemplo
                  </Text>
                </Link>
              )}
              <Spacer horizontal="20" />
              <Button size="sm" color="primary" bordered="true" hover="true">
                <Text variant="body2" bold="true">
                  Login
                </Text>
              </Button>
              <Spacer horizontal="9" />
              <Link path="/">
                <Text variant="body2" color="primaryBorder" bold="true">
                  Cadastro
                </Text>
              </Link>
            </CenterContainerFlex>
          ) : (
            <CenterContainerFlex>
              <GiHamburgerMenu
                size="1.5rem"
                color={theme.colors.primary}
                onClick={handleTopBarMobileFather}
                style={{ cursor: "pointer" }}
              />
              <Spacer horizontal="10" />
            </CenterContainerFlex>
          )}
        </InternalContainerTopbar>
      </Box>
    </>
  );
}

export default TopbarFull;
