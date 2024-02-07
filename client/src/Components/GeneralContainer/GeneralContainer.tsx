import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";

import { theme } from "../../styles/theme";

import Box from "../Box";
import Spacer from "../Spacer";
import Text from "../Text";

import { BiArrowBack } from "react-icons/bi";

import {
  ContentGeneralContainer,
  MainContainer,
  TitleGeneralContainer,
} from "../../utils/Containers/Containers";

function GeneralContainer() {
  const navigate = useNavigate();
  const screen = useScreen();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <MainContainer
        style={{
          backgroundColor: `${theme.colors.offWhite}`,
        }}
      >
        <TitleGeneralContainer>
          <Text variant="h3" bold="true">
            Vizualizar dados
          </Text>
        </TitleGeneralContainer>
        <Spacer vertical="4" />
        <Box
          size="generalContainer"
          backgroundColor="backgroundBox"
          rounded
          shadow="accessContainer"
        >
          <ContentGeneralContainer>
            <BiArrowBack
              style={{ width: "2rem", height: "2rem", cursor: "pointer", margin: "1rem 0 0 1rem"}}
              color={theme.colors.grey}
              onClick={() => navigate("/")}
            />
          </ContentGeneralContainer>
        </Box>
      </MainContainer>
    </>
  );
}

export default GeneralContainer;
