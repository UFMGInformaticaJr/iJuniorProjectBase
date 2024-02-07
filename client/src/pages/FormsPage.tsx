import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useScreen from "../hooks/useScreen";
import { theme } from "../styles/theme";

import { LoginData, useAuth } from "../services/context/AuthContext";
import { createUser } from "../utils/Requests/User/createUser";

import showMore from "../assets/showMore.svg";
import ModalValidation from "../Components/AccessContainer/ModalValidation";
import Button from "../Components/Button";
import Column from "../Components/Grid/Column";
import Row from "../Components/Grid/Row";
import Input from "../Components/Input";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { Autocomplete, TextField } from "@mui/material";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import {
  CenterContainer,
  ContainerForms,
  ContainerFormsInput,
  ContentGeneralContainer,
  FormContent,
  MainContainer,
  TitleStartContainer,
} from "../utils/Containers/Containers";

function FormsPage() {
  const navigate = useNavigate();
  const screen = useScreen();
  const { signIn, userLogged } = useAuth();

  const [fullName, setFullName] = useState("");
  const HandleFullName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value);
  const [modalFullName, setModalFullName] = useState(false as boolean);

  const [email, setEmail] = useState("");
  const HandleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const [modalEmail, setModalEmail] = useState(false);

  const [cpf, setCpf] = useState("");
  const HandleCpf = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCpf(e.target.value);
  const [modalCpf, setModalCpf] = useState(false);

  const [state, setState] = useState<string | null>("");

  const [modalState, setModalState] = useState(false);

  const [cep, setCep] = useState("");
  const HandleCep = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCep(e.target.value);
  const [modalCep, setModalCep] = useState(false);

  const [password, setPassword] = useState("" as string);
  const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const [modalPassword, setModalPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("" as string);
  const HandleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);
  const [modalConfirmPassword, setModalConfirmPassword] = useState(false);

  const [street, setStreet] = useState("");
  const HandleStreet = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStreet(e.target.value);

  const [neighborhood, setNeighborhood] = useState("");
  const HandleNeighborhood = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNeighborhood(e.target.value);

  const [addressNumber, setAddressNumber] = useState("");
  const HandleAddressNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddressNumber(e.target.value);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [modalAllInputs, setModalAllInputs] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const [modalSuccess, setModalSuccess] = useState(false as boolean);

  function formattedCpfCnpj(cpf: string) {
    if (cpf.length <= 14) {
      return cpf
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      return cpf
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }
  }

  const convertCep = (cep: string) => {
    return cep.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2");
  };

  const states = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RR",
    "RO",
    "RJ",
    "RN",
    "RS",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const validate = (
    password: string,
    confirmPassword: string,
    email: string,
    name: string,
    cpf_cnpj: string,
    cep: string,
    state: string,
    street: string,
    neighborhood: string,
    addressNumber: string
  ) => {
    if (
      password === "" ||
      email === "" ||
      name === "" ||
      cpf_cnpj === "" ||
      confirmPassword === "" ||
      cep === "" ||
      state === "" ||
      street === "" ||
      neighborhood === "" ||
      addressNumber === ""
    ) {
      setModalAllInputs(true);
      return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setModalEmail(true);
      return false;
    }
    if (!name.match(/^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/)) {
      setModalFullName(true);
      return false;
    }
    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
      )
    ) {
      setModalPassword(true);
      return false;
    }
    if (password != confirmPassword) {
      setModalConfirmPassword(true);
      return false;
    }
    if (
      !cpf_cnpj.match(
        /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
      )
    ) {
      setModalCpf(true);
      return false;
    }
    if (!cep.match(/^[0-9]{8}$/)) {
      setModalCep(true);
      return false;
    }
    // if((!addressNumber.match('^[0-9]+$'))){
    //   setModalAddressNumber(true)
    //   return false
    // }

    return true;
  };

  const [ismobile, setismobile] = useState(false);

  const [receiveNewsletter, setReceiveNewsletter] = useState(false);
  const HandleReceiveNewsletter = (e: React.ChangeEvent<HTMLInputElement>) =>
    setReceiveNewsletter(e.target.checked);

  useEffect(
    () =>
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setismobile(true)
        : setismobile(false),
    [screen]
  );

  let newsletter = "false";
  if (receiveNewsletter) {
    newsletter = "true";
  } else {
    newsletter = "false";
  }

  const handleSubmit = async () => {
    //formatar o cpf tirando os pontos e traços
    const cpfFormatado = cpf.replace(/\D/g, "");
    //formatar o cep tirando os pontos e traços
    const cepFormatado = cep.replace(/\D/g, "");

    const data = {
      email: email,
      name: fullName,
      password: password,
      cpf_cnpj: cpfFormatado,
      role: "commonUser",
      cep: cepFormatado,
      state: state?.toLocaleLowerCase(),
      street: street,
      neighborhood: neighborhood,
      addressNumber: addressNumber,
      plan: "free",
      receiveNewsletter: newsletter,
    };

    if (
      validate(
        password,
        confirmPassword,
        email,
        fullName,
        cpf,
        cep,
        state || "", // provide a default value for state
        street,
        neighborhood,
        addressNumber || "" // provide a default value for addressNumber
      )
    ) {
      try {
        await createUser(data);
        await signIn({ email, password } as LoginData);
        await userLogged();
        navigate("/");
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {(modalPassword && (
        <ModalValidation
          showModal={modalPassword}
          setShowModal={setModalPassword}
          title="Senha inválida!"
          description="O formato da senha é inválido, tente novamente."
        />
      )) ||
        (modalConfirmPassword && (
          <ModalValidation
            showModal={modalConfirmPassword}
            setShowModal={setModalConfirmPassword}
            title="As senhas não coincidem!"
            description="As senhas informadas não coincidem, tente novamente."
          />
        )) ||
        (modalEmail && (
          <ModalValidation
            showModal={modalEmail}
            setShowModal={setModalEmail}
            title="Email inválido!"
            description="O formato do email é inválido, tente novamente."
          />
        )) ||
        (modalState && (
          <ModalValidation
            showModal={modalState}
            setShowModal={setModalState}
            title="Estado inválido!"
            description="O estado informado é inválido, tente novamente."
          />
        )) ||
        (modalFullName && (
          <ModalValidation
            showModal={modalFullName}
            setShowModal={setModalFullName}
            title="Nome inválido!"
            description="O nome informado é inválido, tente novamente."
          />
        )) ||
        (modalCpf && (
          <ModalValidation
            showModal={modalCpf}
            setShowModal={setModalCpf}
            title="CPF/CNPJ inválido!"
            description="O CPF/CNPJ informado é inválido, tente novamente."
          />
        )) ||
        (modalCep && (
          <ModalValidation
            showModal={modalCep}
            setShowModal={setModalCep}
            title="CEP inválido!"
            description="O CEP informado é inválido, tente novamente."
          />
        )) ||
        (modalAllInputs && (
          <ModalValidation
            showModal={modalAllInputs}
            setShowModal={setModalAllInputs}
            title="Campos não preenchidos!"
            description="Por favor, preencha todos os campos!"
          />
        )) ||
        (modalSuccess && (
          <ModalValidation
            showModal={modalSuccess}
            setShowModal={setModalSuccess}
            title="Cadastro criado com sucesso!"
            description="Seu cadastro foi criado com sucesso!"
          />
        ))}
      <MainContainer ismobile={ismobile}>
        {ismobile ? <Spacer vertical="12" /> : null}
        <TitleStartContainer>
          {ismobile ? <Spacer vertical="18" /> : <Spacer vertical="24" />}
          <Text variant="h4" color="greyDark" bold="true">
            Cadastro
          </Text>
          <Spacer vertical="8" />
        </TitleStartContainer>
        <FormContent>
          <ContentGeneralContainer>
            <Spacer vertical="8" />
            <BiArrowBack
              style={{
                width: `${ismobile ? "1.5rem" : "2rem"}`,
                height: `${ismobile ? "1.5rem" : "2rem"}`,
                marginLeft: `${ismobile ? "1.25rem" : "1.5rem"}`,
                cursor: "pointer",
              }}
              color={theme.colors.grey}
              onClick={() => navigate("/")}
            />
            <ContainerForms ismobile={ismobile}>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Nome completo</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu nome completo"
                        type="text"
                        center="true"
                        onChange={(e) => HandleFullName(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Email</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite e-mail"
                        type="text"
                        center="true"
                        onChange={(e) => HandleEmail(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">CEP</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu CEP"
                        type="text"
                        center="true"
                        value={convertCep(cep)}
                        maxLength="9"
                        onChange={(e) => HandleCep(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">CPF/CNPJ</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu CPF/CNPJ"
                        type="text"
                        center="true"
                        value={formattedCpfCnpj(cpf)}
                        maxLength="18"
                        onChange={(e) => HandleCpf(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Estado</Text>
                      <Spacer vertical="4" />
                      <Autocomplete
                        id="combo-box-demo"
                        options={states}
                        style={{
                          background: "#F2F2F2",
                        }}
                        popupIcon={<img src={showMore} alt="Globe" />}
                        size="small"
                        value={state}
                        onChange={(event: any, newValue: React.SetStateAction<string | null>) => {
                          console.log(event);
                          setState(newValue);
                        }}
                        renderInput={(params: any) => (
                          <TextField {...params} label="Selecione seu estado" />
                        )}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>
              <Spacer vertical="8" />
              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Senha</Text>
                      <Spacer vertical="4" />
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Input
                          size="forms"
                          placeholder="Digite sua senha"
                          type={passwordVisible ? "text" : "password"}
                          center="true"
                          onChange={(e) => HandlePassword(e)}
                          suffix
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
                            onClick={togglePasswordVisibility}
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
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Confirmar senha</Text>
                      <Spacer vertical="4" />
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Input
                          size="forms"
                          placeholder="Digite novamente sua senha"
                          type={confirmPasswordVisible ? "text" : "password"}
                          center="true"
                          onChange={(e) => HandleConfirmPassword(e)}
                        />
                        {confirmPasswordVisible ? (
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
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>

              <Row>
                <Column grid={6}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Rua</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite sua rua"
                        type="text"
                        center="true"
                        value={street}
                        onChange={(e) => HandleStreet(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Bairro</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu bairro"
                        type="text"
                        center="true"
                        value={neighborhood}
                        onChange={(e) => HandleNeighborhood(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
                <Column grid={3}>
                  <CenterContainer>
                    <ContainerFormsInput
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text variant="body2">Número</Text>
                      <Spacer vertical="4" />
                      <Input
                        size="forms"
                        placeholder="Digite seu número"
                        type="text"
                        center="true"
                        value={addressNumber}
                        onChange={(e) => HandleAddressNumber(e)}
                      />
                    </ContainerFormsInput>
                  </CenterContainer>
                </Column>
              </Row>

              <Spacer vertical="8" />
              <Column grid={12}>
                <CenterContainer>
                  <ContainerFormsInput
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={receiveNewsletter}
                      onChange={(e) => HandleReceiveNewsletter(e)}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                    <Spacer horizontal="8" />
                    <Text variant="body2">Receber Newsletter</Text>
                  </ContainerFormsInput>
                </CenterContainer>
              </Column>
              <Spacer vertical="12" />
              <Button
                size={
                  screen < 1138 && !ismobile ? "md" : ismobile ? "2xs" : "xlg"
                }
                color="primary"
                onClick={() => handleSubmit()}
                hover="true"
              >
                <Text variant="body2" bold="true">
                  Cadastrar
                </Text>
              </Button>
              <Spacer vertical="14" />
            </ContainerForms>
          </ContentGeneralContainer>
        </FormContent>
        <Spacer vertical="12" />
      </MainContainer>
    </>
  );
}

export default FormsPage;
