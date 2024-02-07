import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useScreen from "../../../hooks/useScreen";

import { LoginData, useAuth } from "../../../services/context/AuthContext";

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
import Logo from "../../../assets/iJunior.svg";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import {
  CenterHorizontalContainer,
  LeftAccessContainer,
  LineHorizontal,
  LineVertical,
  MainAceessContainer,
  MainContainer,
  RightAccessContainer,
} from "../../../utils/Containers/Containers";

function Login() {
  const navigate = useNavigate();
  const screen = useScreen();

  const { signIn, userLogged, isAdmin } = useAuth();

  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const [modalEmail, setModalEmail] = useState(false);

  const [password, setPassword] = useState("");
  const HandlePassowrd = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const [modalPassword, setModalPassword] = useState(false);

  const validateEmail = (email: string): boolean => {
    // se o email não tiver @ ou não tiver um ponto retorna false
    if (email === "" || !email.includes("@") || !email.includes(".")) {
      setModalEmail(true);
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    //se a senha for menor que 8 caracteres não possui um número ou letra maiúscula ou caractere especial retorna false
    if (
      password === "" ||
      password.length < 8 ||
      !password.match(/[A-Z]/) ||
      !password.match(/[0-9]/) ||
      !password.match(/[^a-zA-Z\d]/)
    ) {
      setModalPassword(true);
      return false;
    }
    return true;
  };

  const logoSizeOptions = ["7.1875rem", "5rem", "4rem"];
  const [logoSize, setLogoSize] = useState(logoSizeOptions[0]);

  const [ismobile, setismobile] = useState(false);

  useEffect(() => {
    /*const checkLogged = async () => {
      const user = await userLogged();
      if (user) {
        navigate("/");
      }
      checkLogged();
    };*/
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

  const HandleSubmit = async () => {
    // Trim the input values before using them
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const body: LoginData = {
      email: trimmedEmail,
      password: trimmedPassword,
    };

    if (validateEmail(email) && validatePassword(password)) {
      try {
        await signIn(body);
        await userLogged();

        if (isAdmin) {
          navigate("/gerenciar-imoveis");
        } else {
          navigate("/imoveis");
        }
      } catch (err: any) {
        console.error("Error occurred:", err);
        setModalPassword(true);
      }
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleKeyDown = (e: any) => {
    if (e.code == "Enter") {
      HandleSubmit();
    }
  };

  return (
    <>
      {(modalEmail && (
        <ModalValidation
          showModal={modalEmail}
          setShowModal={setModalEmail}
          title="Email ou senha inválida!"
          description="O email ou senha informada é inválido, tente novamente."
        />
      )) ||
        (modalPassword && (
          <ModalValidation
            showModal={modalPassword}
            setShowModal={setModalPassword}
            title="Email ou senha inválida!"
            description="O email ou senha informada é inválida, tente novamente."
          />
        ))}
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
              <Text variant="h4">Login</Text>
              <Spacer vertical="8" />
              <Input
                size="ssm"
                placeholder="Email profissional"
                type="email"
                center="true"
                onChange={(e) => HandleEmail(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <Spacer vertical="8" />
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <Input
                  size="ssm"
                  placeholder="Senha"
                  type={passwordVisible ? "text" : "password"}
                  center="true"
                  onChange={(e) => HandlePassowrd(e)}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
                {passwordVisible ? (
                  <AiFillEye
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "absolute",
                      bottom: "25%",
                      right: "2%",
                      color:`${theme.colors.primary}`,
                      cursor: "pointer",
                    }}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <AiFillEyeInvisible
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "absolute",
                      bottom: "25%",
                      right: "2%",
                      color:`${theme.colors.primary}`,
                      cursor: "pointer",
                    }}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
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
                  Entrar
                </Text>
              </Button>
              {logoSize === logoSizeOptions[0] ? (
                <Spacer vertical="12" />
              ) : logoSize === logoSizeOptions[1] ? (
                <Spacer vertical="8" />
              ) : (
                <Spacer vertical="6" />
              )}
              <Link path="/esqueceu-sua-senha">
                <Text variant="body2" color="primary" hover="true">
                  Esqueceu a senha?
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
              <Spacer vertical="12" />
            </CenterHorizontalContainer>
          </Box>
        </MainContainer>
      ) : (
        /*<MainContainer imgUrl={Resort} style={{ flexDirection: "row" }}>*/
        <MainContainer style={{ flexDirection: "row" }}>
          <Spacer vertical="18" />
          <GlobalStyle />
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
                  onClick={() => navigate("/")}
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
                  <Text variant="h3">Login</Text>
                  <Spacer vertical="14" />
                  <Input
                    size="ssm"
                    placeholder="Email"
                    type="email"
                    center="true"
                    onChange={(e) => HandleEmail(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                  />
                  <Spacer vertical="9" />
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <Input
                      size="ssm"
                      placeholder="Senha"
                      type={passwordVisible ? "text" : "password"}
                      center="true"
                      onChange={(e) => HandlePassowrd(e)}
                      onKeyDown={(e) => handleKeyDown(e)}
                    />{" "}
                    {passwordVisible ? (
                      <AiFillEye
                        style={{
                          height: "20px",
                          width: "20px",
                          position: "absolute",
                          bottom: "25%",
                          right: "2%",
                          color:`${theme.colors.primary}`,
                          cursor: "pointer",
                        }}
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        style={{
                          height: "20px",
                          width: "20px",
                          position: "absolute",
                          bottom: "25%",
                          right: "2%",
                          color:`${theme.colors.primary}`,
                          cursor: "pointer",
                        }}
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    )}
                  </div>

                  <Spacer vertical="12" />
                  <Button
                    size="2xs"
                    color="primary"
                    hover="true"
                    onClick={() => HandleSubmit()}
                  >
                    <Text variant="body2" bold="true">
                      Entrar
                    </Text>
                  </Button>
                  <Spacer vertical="11" />
                  <LineHorizontal />
                  <Spacer vertical="7" />
                  <Link path="/esqueceu-sua-senha">
                    <Text variant="body2" color="primary" hover="true">
                      Esqueceu a senha?
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

export default Login;
