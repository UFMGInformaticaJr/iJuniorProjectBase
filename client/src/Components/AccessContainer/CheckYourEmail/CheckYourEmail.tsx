import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../../../hooks/useScreen";

import GlobalStyle from "../../../styles/GlobalStyle";
import { theme } from "../../../styles/theme";

import Box from "../../Box";
import Button from "../../Button";
import Input from "../../Input";
import Link from "../../Link";
import Spacer from "../../Spacer";
import Text from "../../Text";

import ModalValidation from "../ModalValidation";

import { FaReact } from "react-icons/fa";

import {
  CenterContainer,
  CenterHorizontalContainer,
  LeftAccessContainer,
  LineHorizontal,
  LineVertical,
  MainAceessContainer,
  MainContainer,
  RightAccessContainer,
} from "../../../utils/Containers/Containers";

function CheckYourEmail() {
  const navigate = useNavigate();
  const screen = useScreen();

  const codeTest: string = "12#21";

  const [code, setCode] = useState(" ");
  const HandleCode = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value);
  const [modalCode, setModalCode] = useState(false);

  const validateCode = (code: string): boolean => {
    if (code === "" || code !== codeTest) {
      setModalCode(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateCode(code)) navigate("/login");
  };

  const logoSizeOptions = ["7.1875rem", "5rem", "4rem"];
  const [logoSize, setLogoSize] = useState(logoSizeOptions[0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (
      screen >
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    )
      setLogoSize(logoSizeOptions[0]);

    if (
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    )
      setLogoSize(logoSizeOptions[1]);

    if (
      screen <
      Number(
        theme.breakpoints.ml.slice(0, theme.breakpoints.ml.indexOf("rem"))
      ) *
        16
    )
      setLogoSize(logoSizeOptions[2]);
  }, [screen]);

  return (
    <>
      {modalCode && (
        <ModalValidation
          showModal={modalCode}
          setShowModal={setModalCode}
          title="Código inválido !"
          description="O código informado é inválido, tente novamente."
        />
      )}
      {isMobile ? (
        <MainContainer>
          <GlobalStyle />
          <Box
            size="accessContainerMobile"
            rounded
            backgroundColor="backgroundBox"
            shadow="accessContainer"
          >
            <CenterHorizontalContainer style={{ padding: "0 3rem 0 3rem" }}>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="16" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="14" />
              ) : (
                <Spacer vertical="12" />
              )}
              <FaReact
                style={{ width: `${logoSize}`, height: `${logoSize}` }}
                color={theme.colors.primary}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="4" />
              )}
              <Text variant="h4">Verifique seu email</Text>
              <Spacer vertical="8" />
              <Text variant="legenda" center>
                Para redefinir sua senha, informe o código que enviamos para o
                seu email profissional. Lembre-se de verificar a caixa de spam e
                o lixo eletrônico.
              </Text>
              <Spacer vertical="12" />
              <Input
                size="2sm"
                placeholder="Código"
                type="text"
                center
                onChange={(e) => HandleCode(e)}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : (
                <Spacer vertical="8" />
              )}
              <Button
                size="2xs"
                color="primary"
                hover
                onClick={() => HandleSubmit()}
              >
                <Text variant="body2" bold>
                  Redefnir senha
                </Text>
              </Button>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="6" />
              )}
              <Link path="/">
                <Text variant="body2" color="primary" hover center>
                  Não recebeu o código ? Reenvie para o email
                </Text>
              </Link>
            </CenterHorizontalContainer>
          </Box>
        </MainContainer>
      ) : (
        <MainContainer style={{ flexDirection: "row" }}>
          <GlobalStyle />
          <Box
            size="accessContainer"
            rounded
            backgroundColor="backgroundBox"
            shadow="accessContainer"
          >
            <MainAceessContainer>
              <RightAccessContainer>
                <CenterContainer>
                  <FaReact
                    style={{ width: "13.875rem", height: "13.875rem" }}
                    color={theme.colors.primary}
                  />
                </CenterContainer>
              </RightAccessContainer>
              <LineVertical />
              <LeftAccessContainer>
                <CenterHorizontalContainer style={{ justifyContent: "center" }}>
                  <Text variant="h3">Verifique seu email</Text>
                  <Spacer vertical="8" />
                  <Text variant="legenda" center>
                    Para redefinir sua senha, informe o código que enviamos para
                    o seu email profissional. Lembre-se de verificar a caixa de
                    spam e o lixo eletrônico.
                  </Text>
                  <Spacer vertical="14" />
                  <Input
                    size="2sm"
                    placeholder="Codigo"
                    type="text"
                    center
                    onChange={(e) => HandleCode(e)}
                  />
                  <Spacer vertical="12" />
                  <Button
                    size="2xs"
                    color="primary"
                    hover
                    onClick={() => HandleSubmit()}
                  >
                    <Text variant="body1" bold>
                      Confirmar
                    </Text>
                  </Button>
                  <Spacer vertical="11" />
                  <LineHorizontal />
                  <Spacer vertical="7" />
                  <Link path="/esqueceu-sua-senha">
                    <Text variant="body2" color="primary" hover>
                      Não recebeu o código? Reenvie para o email
                    </Text>
                  </Link>
                  <Spacer vertical="4" />
                </CenterHorizontalContainer>
              </LeftAccessContainer>
            </MainAceessContainer>
          </Box>
        </MainContainer>
      )}
    </>
  );
}

export default CheckYourEmail;
