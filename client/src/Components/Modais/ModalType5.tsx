import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme";
interface ModalType5Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Box from "../Box";
import Text from "../Text";

import {
  CenterHorizontalContainer,
  LineHorizontal,
  MainContainerInModal,
  MainContainerModal,
  TopContainerInModal,
} from "../../utils/Containers/Containers";

function ModalType5({ showModal, setShowModal }: ModalType5Props) {

  const ModalRef = useRef<HTMLHeadingElement>(null);

  const CloseModalOnOutsideClick = (e: any) =>  ModalRef.current === e.target ? setShowModal(false) : null;

  return (
    <>
      {showModal ? (
        <MainContainerModal ref={ModalRef} onClick={(e) => CloseModalOnOutsideClick(e)}>
          <GlobalStyle />
          <Box size="modalSizeType5" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold color="primary">
                  Modal Informativo 2!
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
                <Text variant="body2" color="greySolid" justify>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita excepturi sint praesentium, sit optio ullam sed iusto
                  voluptate possimus, quasi nulla modi qui culpa nobis
                  consectetur voluptatum minima facere magnam? Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Debitis atque vero
                  porro aperiam aliquid quisquam quas neque, quis perferendis ea
                  velit nulla. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Numquam molestiae ipsam non fuga similique.
                  Recusandae optio maxime delectus minus repudiandae,
                  exercitationem, non ipsa sapiente provident, unde tempore
                  voluptatem ipsam tenetur? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Nisi cupiditate nam quas libero,
                  voluptatem natus ullam, laborum numquam sint quisquam alias
                  reiciendis maxime asperiores! Voluptates ipsum exercitationem
                  dolor et nostrum. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quasi ratione sequi ipsa recusandae culpa
                  id! Laborum illum veritatis, esse commodi cum omnis eos
                  exercitationem odit velit deleniti necessitatibus inventore
                  possimus? Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Ducimus explicabo officiis distinctio quos voluptates
                  ipsum unde omnis exercitationem excepturi blanditiis animi
                  perferendis. Voluptas doloremque hic omnis ab ipsum accusamus?
                  Lorem ipsum dolor
                </Text>
              </MainContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalType5;
