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

import { forgotPassword } from "../../../utils/Requests/User/forgotPassword";

import { BiArrowBack } from "react-icons/bi";
import Logo from "../../../assets/iJunior.svg";

import {
    CenterHorizontalContainer,
    LeftAccessContainer,
    LineHorizontal,
    LineVertical,
    MainAceessContainer,
    MainContainer,
    RightAccessContainer,
} from "../../../utils/Containers/Containers";

function ForgotYourPassword() {
  const navigate = useNavigate();
  const screen = useScreen();

  const [email, setEmail] = useState(" ");
  const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const [modalEmail, setModalEmail] = useState(false);

  const [modalSuccess, setModalSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      setModalEmail(true);
      return false;
    }
    return true;
  };

  const HandleSubmit = async () => {
    const body = {
      email: email,
    };
    if (validateEmail(email)) {
      try {
        await forgotPassword(body);
        setModalSuccess(true);
        alert("Email enviado com sucesso! " + email);
        // armazenar o email no localstorage
        localStorage.setItem("email", email);
        navigate("/inserir-token");
      } catch (err: any) {
        console.log(err);
        setModalEmail(true);
      }
    }
  };

  const logoSizeOptions = ["7.1875rem", "5rem", "4rem"];
  const [logoSize, setLogoSize] = useState(logoSizeOptions[0]);

  const [ismobile, setismobile] = useState(false);

  useEffect(() => {
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
      {(modalSuccess && (
        <ModalValidation
          showModal={modalSuccess}
          setShowModal={setModalSuccess}
          title="Email enviado com sucesso!"
          description="O email com o token e as instruções para redefinir sua senha foi enviado com sucesso!"
        />
      )) ||
        (modalEmail && (
          <ModalValidation
            showModal={modalEmail}
            setShowModal={setModalEmail}
            title="Email ou senha inválida!"
            description="O email digitado não está cadastrado no sistema. Por favor, digite um email válido e que já esteja cadastrado."
          />
        ))}
      {ismobile ? (
        <MainContainer>
          <GlobalStyle />
          <Spacer vertical="8" />
          <Box
            size="accessContainerMobile"
            rounded="true"
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
              <Text variant="h4">Esqueceu sua senha?</Text>
              <Spacer vertical="8" />
              <Text variant="legenda" center="true">
                Basta inserir seu endereço de e-mail profissional abaixo e
                enviaremos um código para redefinir sua senha!
              </Text>
              <Spacer vertical="12" />
              <Input
                size="ssm"
                placeholder="Email profissional"
                type="email"
                center="true"
                onChange={(e) => HandleEmail(e)}
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
                  Continuar
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
              <Link path="/forms">
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
            rounded="true"
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
                <CenterHorizontalContainer>
                  <Spacer vertical="16" />
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "13.875rem", height: "13.875rem" }}
                  />
                </CenterHorizontalContainer>
              </RightAccessContainer>
              <LineVertical />
              <LeftAccessContainer>
                <CenterHorizontalContainer style={{ justifyContent: "center" }}>
                  <Text variant="h3">Esqueceu sua senha?</Text>
                  <Spacer vertical="8" />
                  <Text variant="legenda" center="true">
                    Basta inserir seu endereço de e-mail profissional abaixo e
                    enviaremos um código para redefinir sua senha!
                  </Text>
                  <Spacer vertical="14" />
                  <Input
                    size="ssm"
                    placeholder="Email"
                    type="email"
                    center="true"
                    onChange={(e) => HandleEmail(e)}
                  />
                  <Spacer vertical="12" />
                  <Button
                    size="2xs"
                    color="primary"
                    hover="true"
                    onClick={() => HandleSubmit()}
                  >
                    <Text variant="body1" bold="true">
                      Continuar
                    </Text>
                  </Button>
                  <Spacer vertical="11" />
                  <LineHorizontal />
                  <Spacer vertical="7" />
                  <Link path="/login">
                    <Text variant="body2" color="primary" hover="true">
                      Já tem uma conta? Faça login
                    </Text>
                  </Link>
                  <Spacer vertical="4" />
                  <Link path="/forms">
                    <Text variant="body2" color="primary" hover="true">
                      Ainda não tem uma? Cadastre aqui
                    </Text>
                  </Link>
                </CenterHorizontalContainer>
              </LeftAccessContainer>
            </MainAceessContainer>
          </Box>
        </MainContainer>
      )}
    </>
  );
}

export default ForgotYourPassword;
