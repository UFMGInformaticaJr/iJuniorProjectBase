import { useRef } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";

interface ModalValidationProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  title: string;
  description: string;
}

import Box from "../Box";
import Button from "../Button";
import Text from "../Text";

import { AiOutlineClose } from "react-icons/ai";

import {
  BottomContainerInModal,
  CenterHorizontalContainer,
  LineHorizontal,
  MainContainerInModal,
  MainContainerModal,
  TopContainerInModal,
} from "../../utils/Containers/Containers";

function ModalValidation({
  showModal,
  setShowModal,
  title,
  description,
}: ModalValidationProps) {
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
                <Text variant="body1" bold color="danger">
                  {title}
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
              <MainContainerInModal type="validation">
                <Text variant="body1" color="greySolid">
                  {description}
                </Text>
              </MainContainerInModal>
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="2xs"
                  color="danger"
                  hover
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body1" color="white">
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

export default ModalValidation;
