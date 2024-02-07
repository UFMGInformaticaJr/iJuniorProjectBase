import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers/Containers";

function NavbarPage() {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
          onClick={() => navigate("/navbar/short")}
        >
          <Text variant="body2" bold>
            Navbar Short
          </Text>
        </Button>
        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
          onClick={() => navigate("/navbar/full")}
        >
          <Text variant="body2" bold>
            Navbar Full
          </Text>
        </Button>
        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
          onClick={() => navigate("/navbar/example")}
        >
          <Text variant="body2" bold>
            Example
          </Text>
        </Button>
      </MainContainer>
    </>
  );
}

export default NavbarPage;
