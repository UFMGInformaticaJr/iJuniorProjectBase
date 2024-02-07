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

import { BiArrowBack } from "react-icons/bi";
import Logo from "../../../assets/logo.svg";

import {
    CenterHorizontalContainer,
    LeftAccessContainer,
    LineHorizontal,
    LineVertical,
    MainAceessContainer,
    MainContainer,
    RightAccessContainer,
} from "../../../utils/Containers/Containers";

import { ValidateToken } from "../../../utils/Requests/User/validateToken";

function InsertToken() {
  const navigate = useNavigate();
  const screen = useScreen();

  // const emailTest = "teste@gmail.com";

  const [token, setToken] = useState(" ");
  const HandleToken = (e: React.ChangeEvent<HTMLInputElement>) =>
    setToken(e.target.value);
  const [modalToken, setModalToken] = useState(false);

  const [password, setPassword] = useState("");
  const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const [confirmPassword, setConfirmPassword] = useState("");
  const HandleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);


  const HandleSubmit = () => {
    const email: string | any = localStorage.getItem("email");
    alert("email: "+email+"\nPassword: "+password+"\ntoken: "+token);

    const body = {
      email: email,
      token: token,
      password: password,
    };

    if (password === confirmPassword) {
      try {
        ValidateToken(body);
        navigate("/");
      } catch (error) {
        setModalToken(true);
      }
    } else {
      setModalToken(true);
    }
  };

  const logoSizeOptions = ["7.1875rem", "5rem", "4rem"];
  const [logoSize, setLogoSize] = useState(logoSizeOptions[0]);

  const [ismobile, setismobile] = useState(false);

  useEffect(() => {
    console.log("email: "+localStorage.getItem("email"));
    if (
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
    ) {
      setismobile(true);
    } else {
      setismobile(false);
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
      {modalToken && (
        <ModalValidation
          showModal={modalToken}
          setShowModal={setModalToken}
          title="Token incorreto ou inválido"
          description="O token digitado não foi o enviado para o email. Por favor, digite o token enviado anteriormente."
        />
      )}
      {ismobile ? (
        <MainContainer>
          <GlobalStyle />
          <Spacer vertical="8" />
          <Box
            size="accessContainerMobile"
            rounded
            backgroundColor="primaryGradient"
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
              <img
                src={Logo}
                alt="Logo"
                style={{ width: `${logoSize}`, height: `${logoSize}` }}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="4" />
              )}
              <Text variant="h4">Insira o token recebido</Text>
              <Spacer vertical="8" />
              <Text variant="legenda" center="true">
                Insira o token que foi enviado para o seu email para prosseguir
                com a alteração de sua senha.
              </Text>
              <Spacer vertical="12" />
              <Input
                size="ssm"
                placeholder="Insira o Token"
                type="text"
                center="true"
                onChange={(e) => HandleToken(e)}
              />
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : (
                <Spacer vertical="8" />
              )}
              <Button
                size="2xs"
                color="primary"
                hover="true"
                onClick={() => HandleSubmit()}
              >
                <Text variant="body2" bold="true">
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
              <Link path="/login">
                <Text variant="body2" color="primary" hover="true">
                  Já tem uma conta? Faça login
                </Text>
              </Link>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="4" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="2" />
              ) : (
                <Spacer vertical="1" />
              )}
              <Link path="/">
                <Text variant="body2" color="primary" hover="true">
                  Ainda não tem uma? Cadastre aqui
                </Text>
              </Link>
            </CenterHorizontalContainer>
          </Box>
        </MainContainer>
      ) : (
        <MainContainer style={{ flexDirection: "row" }}>
          <GlobalStyle />
          <Spacer vertical="18" />
          <Box
            size="accessContainer"
            rounded
            backgroundColor="primaryGradient"
            shadow="accessContainer"
          >
            <MainAceessContainer>
              <RightAccessContainer style={{ flexDirection: "column" }}>
                <Spacer vertical="12" />
                <BiArrowBack
                  style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
                  color={theme.colors.grey}
                  onClick={() => navigate("/login")}
                />
                <CenterHorizontalContainer style={{ justifyContent: "center" }}>
                  <Text variant="h3">Insira o Token</Text>
                  <Spacer vertical="8" />
                  <Text variant="legenda" center="true">
                    Insira o token que foi enviado para o seu email para
                    prosseguir com a alteração de sua senha.
                  </Text>
                  <Spacer vertical="14" />
                  <Input
                    size="ssm"
                    placeholder="token"
                    type="text"
                    center="true"
                    onChange={(e) => HandleToken(e)}
                  />
                  <Spacer vertical="12" />
                  <LineHorizontal />
                  <Spacer vertical="7" />
                  <Link path="/login">
                    <Text variant="body2" color="primary" hover="true">
                      Já tem uma conta? Faça login
                    </Text>
                  </Link>
                  <Spacer vertical="4" />
                  <Link path="/">
                    <Text variant="body2" color="primary" hover="true">
                      Ainda não tem uma? Cadastre aqui
                    </Text>
                  </Link>
                  <Spacer vertical="20" />
                </CenterHorizontalContainer>
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
                  <Spacer vertical="8" />
                  <Input
                    size="ssm"
                    placeholder="Nova senha"
                    type="password"
                    center="true"
                    onChange={(e) => HandlePassword(e)}
                  />
                  <Spacer vertical="8" />
                  <Input
                    size="ssm"
                    placeholder="Repita a nova senha"
                    type="password"
                    center="true"
                    onChange={(e) => HandleConfirmPassword(e)}
                  />
                  <Spacer vertical="16" />
                  <Button
                    size="2xs"
                    color="primary"
                    hover="true"
                    onClick={() => HandleSubmit()}
                  >
                    <Text variant="body1" bold="true">
                      Redefinir senha
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

export default InsertToken;
