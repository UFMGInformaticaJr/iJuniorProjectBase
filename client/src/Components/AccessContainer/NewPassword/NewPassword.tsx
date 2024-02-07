import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../../../hooks/useScreen";

import GlobalStyle from "../../../styles/GlobalStyle";
import { theme } from "../../../styles/theme";

import Box from "../../Box";
import Button from "../../Button";
import Input from "../../Input";
import Spacer from "../../Spacer";
import Text from "../../Text";

import ModalValidation from "../ModalValidation";

import { FaReact } from "react-icons/fa";

import {
  CenterContainer,
  CenterHorizontalContainer,
  LeftAccessContainer,
  LineVertical,
  MainAceessContainer,
  MainContainer,
  RightAccessContainer,
} from "../../../utils/Containers/Containers";

function NewPassword() {
  const navigate = useNavigate();
  const screen = useScreen();

  const [newPassword, setNewPassword] = useState("");
  const HandleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);

  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const HandleConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmNewPassword(e.target.value);

  const [modalConferencePassword, setModalConferencePassword] = useState(false);
  const [modalNewPasswordVoid, setModalNewPasswordVoid] = useState(false);

  const validateNewPassword = (): boolean => {
    if (newPassword !== confirmNewPassword) {
      setModalConferencePassword(true);
      return false;
    }
    if (newPassword === "") {
      setModalNewPasswordVoid(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = () => {
    if (validateNewPassword()) navigate("/login");
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
      {(modalConferencePassword && (
        <ModalValidation
          showModal={modalConferencePassword}
          setShowModal={setModalConferencePassword}
          title="Senhas não conferem!"
          description="As senhas não são iguais, tente novamente."
        />
      )) ||
        (modalNewPasswordVoid && (
          <ModalValidation
            showModal={modalNewPasswordVoid}
            setShowModal={setModalNewPasswordVoid}
            title="Nova senha inválida!"
            description="A nova senha não pode ser vazia, tente novamente."
          />
        ))}
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
              <Text variant="h4">Nova Senha</Text>
              <Spacer vertical="8" />
              <Text variant="legenda" center="true">
                Escolha sua nova senha de acesso. Lembre-se de escolher uma
                senha segura, mas que você não vá esquecer de novo!
              </Text>
              <Spacer vertical="8" />
              <Input
                size="2sm"
                placeholder="Nova senha"
                type="password"
                center="true"
                onChange={(e) => HandleNewPassword(e)}
              />
              <Spacer vertical="8" />
              <Input
                size="2sm"
                placeholder="Repita a nova senha"
                type="password"
                center="true"
                onChange={(e) => HandleConfirmNewPassword(e)}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="16" />
              ) : (
                <Spacer vertical="12" />
              )}
              <Button
                size="2xs"
                color="primary"
                hover="true"
                onClick={() => HandleSubmit()}
              >
                <Text variant="body2" bold="true">
                  Redefinir senha
                </Text>
              </Button>
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
                  <Text variant="h3">Nova Senha</Text>
                  <Spacer vertical="8" />
                  <Text variant="legenda" center="true">
                    Escolha sua nova senha de acesso. Lembre-se de escolher uma
                    senha segura, mas que você não vá esquecer de novo!
                  </Text>
                  <Spacer vertical="14" />
                  <Input
                    size="2sm"
                    placeholder="Nova senha"
                    type="password"
                    center="true"
                    onChange={(e) => HandleNewPassword(e)}
                  />
                  <Spacer vertical="9" />
                  <Input
                    size="2sm"
                    placeholder="Repita a nova senha"
                    type="password"
                    center="true"
                    onChange={(e) => HandleConfirmNewPassword(e)}
                  />
                  <Spacer vertical="12" />
                  <Button
                    size="2xs"
                    color="primary"
                    hover="true"
                    onClick={() => HandleSubmit()}
                  >
                    <Text variant="body1" bold="true">
                      Redefinir Senha
                    </Text>
                  </Button>
                </CenterHorizontalContainer>
              </LeftAccessContainer>
            </MainAceessContainer>
          </Box>
        </MainContainer>
      )}
    </>
  );
}

export default NewPassword;
