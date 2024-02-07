import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers/Containers";

function TopbarPage() {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <GlobalStyle />
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
          onClick={() => navigate("/topbar/mobile")}
        >
          <Text variant="body2" bold>
            Topbar Mobile
          </Text>
        </Button>
        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
          onClick={() => navigate("/topbar/full")}
        >
          <Text variant="body2" bold>
            Topbar Full
          </Text>
        </Button>
        <Spacer vertical="18" />
        <Button
          size="2xs"
          color="primary"
          hover
          bordered
          onClick={() => navigate("/topbar/example")}
        >
          <Text variant="body2" bold>
            Example
          </Text>
        </Button>
      </MainContainer>
    </>
  );
}

export default TopbarPage;
