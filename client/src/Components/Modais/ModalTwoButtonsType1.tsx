import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
interface ModalTwoButtonsType1Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Box from "../Box";
import Button from "../Button";
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

function ModalTwoButtonsType1({
  showModal,
  setShowModal,
}: ModalTwoButtonsType1Props) {
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
                  Item não salvo !
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
                  O item modificado não foi salvo, o que deseja fazer?
                </Text>
              </MainContainerInModal>
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
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body2" bold="true">
                    Continuar
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

export default ModalTwoButtonsType1;
