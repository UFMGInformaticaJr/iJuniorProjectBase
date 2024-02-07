import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
interface ModalOneButtonType1Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Box from "../Box";
import Button from "../Button";
import Text from "../Text";

import {
  BottomContainerInModal,
  CenterHorizontalContainer,
  LineHorizontal,
  MainContainerInModal,
  MainContainerModal,
  TopContainerInModal,
} from "../../utils/Containers/Containers";

function ModalOneButtonType1({
  showModal,
  setShowModal,
}: ModalOneButtonType1Props) {
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
          <Box size="modalSizeType1" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold="true" color="primary">
                  Email já cadastrado!
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
              <LineHorizontal />
              <MainContainerInModal>
                <Text variant="body2" color="greySolid">
                  Já temos um cadastro com esse email. Por favor, use outro
                  email ou faça login caso já tenha um cadastro.
                </Text>
              </MainContainerInModal>
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="2xs"
                  color="primary"
                  hover="true"
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body2" bold="true" color="white">
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

export default ModalOneButtonType1;
