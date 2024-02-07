import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import ModalOneButtonType1 from "../Components/Modais/ModalOneButtonType1";
import ModalTwoButtonsType1 from "../Components/Modais/ModalTwoButtonsType1";

import ModalOneButtonType2 from "../Components/Modais/ModalOneButtonType2";
import ModalTwoButtonsType2 from "../Components/Modais/ModalTwoButtonsType2";

import ModalOneButtonType3 from "../Components/Modais/ModalOneButtonType3";
import ModalTwoButtonsType3 from "../Components/Modais/ModalTwoButtonsType3";

import ModalType4 from "../Components/Modais/ModalType4";
import ModalType5 from "../Components/Modais/ModalType5";

import { MainContainer } from "../utils/Containers/Containers";



function ModalPage() {
  const [showModal1, setShowModal1] = useState(false); // Modal One Button Type 1
  const [showModal2, setShowModal2] = useState(false); // Modal Two Buttons Type 1

  const [showModal3, setShowModal3] = useState(false); // Modal One Buttons Type 2
  const [showModal4, setShowModal4] = useState(false); // Modal Two Buttons Type 2

  const [showModal5, setShowModal5] = useState(false); // Modal One Buttons Type 3
  const [showModal6, setShowModal6] = useState(false); // Modal Two Buttons Type 3

  const [showModal7, setShowModal7] = useState(false); // Modal Type 4
  const [showModal8, setShowModal8] = useState(false); // Modal Type 5

  const OpenModal1 = () => setShowModal1((prev) => !prev); //Modal One Button Type 1
  const OpenModal2 = () => setShowModal2((prev) => !prev); //Modal Two Buttons Type 1

  const OpenModal3 = () => setShowModal3((prev) => !prev); //Modal One Buttons Type 2
  const OpenModal4 = () => setShowModal4((prev) => !prev); //Modal Two Buttons Type 2

  const OpenModal5 = () => setShowModal5((prev) => !prev); //Modal One Buttons Type 3
  const OpenModal6 = () => setShowModal6((prev) => !prev); //Modal Two Buttons Type 3

  const OpenModal7 = () => setShowModal7((prev) => !prev); //Modal Type 4
  const OpenModal8 = () => setShowModal8((prev) => !prev); //Modal Type 5
  
  return (
    <>
      <GlobalStyle />
      <MainContainer>

        <ModalOneButtonType1
          showModal={showModal1}
          setShowModal={setShowModal1}
        />
        <ModalTwoButtonsType1
          showModal={showModal2}
          setShowModal={setShowModal2}
        />
        <ModalOneButtonType2
          showModal={showModal3}
          setShowModal={setShowModal3}
        />
        <ModalTwoButtonsType2
          showModal={showModal4}
          setShowModal={setShowModal4}
        />
        <ModalOneButtonType3
          showModal={showModal5}
          setShowModal={setShowModal5}
        />
        <ModalTwoButtonsType3
          showModal={showModal6}
          setShowModal={setShowModal6}
        />
        <ModalType4 
          showModal={showModal7} 
          setShowModal={setShowModal7} 
        />
        <ModalType5 
          showModal={showModal8} 
          setShowModal={setShowModal8} 
        />

        <Button size="2xs" color="primary" hover onClick={OpenModal1}>
          <Text variant="body1"> Type 1 - One Button </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" bordered hover onClick={OpenModal2}>
          <Text variant="body1"> Type 1 - Two Buttons </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" hover onClick={OpenModal3}>
          <Text variant="body1"> Type 2 - One Button </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" bordered hover onClick={OpenModal4}>
          <Text variant="body1"> Type 2 - Two Buttons </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" hover onClick={OpenModal5}>
          <Text variant="body1"> Type 3 - One Button </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" bordered hover onClick={OpenModal6}>
          <Text variant="body1"> Type 3 - Two Buttons </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" hover onClick={OpenModal7}>
          <Text variant="body1"> Type 4 </Text>
        </Button>
        <Spacer vertical="15" />
        <Button size="2xs" color="primary" hover bordered onClick={OpenModal8}>
          <Text variant="body1"> Type 5</Text>
        </Button>
        <Spacer vertical="15" />
      </MainContainer>
    </>
  );
}

export default ModalPage;
