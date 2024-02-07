import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
interface ModalTwoButtonsType2Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Box from "../Box";
import Button from "../Button";
import Input from "../Input";
import Spacer from "../Spacer";
import Text from "../Text";

import {
  BottomContainerInModal,
  CenterHorizontalContainer,
  LineHorizontal,
  MainContainerInModal,
  MainContainerModal,
  TopContainerInModal,
} from "../../utils/Containers/Containers";

export var ModalTwoButtonsType2InputValue: string = "";

function ModalTwoButtonsType2({
  showModal,
  setShowModal,
}: ModalTwoButtonsType2Props) {
  const [inputValue, setInputValue] = useState("");
  const HandleInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const ModalRef = useRef<HTMLHeadingElement>(null);

  const CloseModalOnOutsideClick = (e: any) =>
    ModalRef.current === e.target ? setShowModal(false) : null;

  return (
    <>
      {showModal ? (
        <MainContainerModal
          ref={ModalRef}
          onClick={(e) => CloseModalOnOutsideClick(e)}
        >
          <GlobalStyle />
          <Box size="modalSizeType2" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold="true" color="primary">
                  Adicionar fonte
                </Text>
                <AiOutlineClose
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                  color={theme.colors.grey}
                  onClick={() => setShowModal(false)}
                />
              </TopContainerInModal>
              <Spacer vertical="6" />
              <LineHorizontal />
              <MainContainerInModal>
                <Input
                  size="sm"
                  type="text"
                  placeholder="Insira a para adicionar uma fonte à resposta da pergunta referente ao item do checkbox."
                  onChange={(e: any) => HandleInputValue(e)}
                />
              </MainContainerInModal>
              <Spacer vertical="6" />
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="xs"
                  color="primary"
                  bordered="true"
                  hover="true"
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body2" bold="true">
                    Sair
                  </Text>
                </Button>
                <Spacer horizontal="12" />
                <Button
                  size="xs"
                  color="primary"
                  hover="true"
                  onClick={() => {
                    setShowModal(false);
                    ModalTwoButtonsType2InputValue = inputValue;
                  }}
                >
                  <Text variant="body2" bold="true">
                    Confirmar
                  </Text>
                </Button>
              </BottomContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalTwoButtonsType2;
