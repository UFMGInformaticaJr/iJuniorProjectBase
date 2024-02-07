import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import { theme } from "../../styles/theme";

import Box from "../Box";
import Link from "../Link";
import Spacer from "../Spacer";
import Text from "../Text";

import {
  BottomBarGeneralFIlterContainer,
  LinkContainerGeneralFilterContainer,
  MainContainer,
  TitleGeneralContainer,
} from "../../utils/Containers/Containers";

function GeneralFilterContainer() {

  const location = useLocation();
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
    <div style={{ display: "flex", width: "100%" }}>
      <MainContainer
        style={{
          backgroundColor: `${theme.colors.offWhite}`,
          width: "100%",
        }}
      >
        <TitleGeneralContainer>
          {location.pathname.indexOf("dados-gerais") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/dados-gerais">
                <Text variant="body2" hover="true" bold="true">
                  Dados Gerais
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/dados-gerais">
              <Text variant="body2" hover="true">
                Dados Gerais
              </Text>
            </Link>
          )}
          <Spacer horizontal="8" />
          {location.pathname.indexOf("dados-clientes") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/dados-clientes">
                <Text variant="body2" hover="true" bold="true">
                  Dados de clientes
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/dados-clientes">
              <Text variant="body2" hover="true">
                Dados de clientes
              </Text>
            </Link>
          )}
          <Spacer horizontal="8" />
          {location.pathname.indexOf("informacoes-empresa") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/informacoes-empresa">
                <Text variant="body2" hover="true" bold="true">
                  Informações da empresa
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/informacoes-empresa">
              <Text variant="body2" hover="true">
                Informações da empresa
              </Text>
            </Link>
          )}
          <Spacer horizontal="8" />
          {location.pathname.indexOf("informacoes-parceiros") !== -1 ? (
            <LinkContainerGeneralFilterContainer>
              <Link path="/general-filter-container/informacoes-parceiros">
                <Text variant="body2" hover="true" bold="true">
                  Informações da parceiros
                </Text>
              </Link>
              <BottomBarGeneralFIlterContainer color="primary" />
            </LinkContainerGeneralFilterContainer>
          ) : (
            <Link path="/general-filter-container/informacoes-parceiros">
              <Text variant="body2" hover="true">
                Informações da parceiros
              </Text>
            </Link>
          )}
        </TitleGeneralContainer>
        <Spacer vertical="8" />
        <Box
          size="generalContainerFilter"
          backgroundColor="backgroundBox"
          rounded
          shadow="accessContainer"
        ></Box>
        <Spacer vertical="12" />
        <Box
          size="generalContainerFilterMain"
          backgroundColor="backgroundBox"
          rounded
          shadow="accessContainer"
        ></Box>
      </MainContainer>
    </div>
  );
}

export default GeneralFilterContainer;
