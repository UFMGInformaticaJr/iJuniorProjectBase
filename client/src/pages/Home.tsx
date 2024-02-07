import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import Button from "../Components/Button";
import Spacer from "../Components/Spacer";
import Text from "../Components/Text";

import { MainContainer } from "../utils/Containers/Containers";

function Home() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <GlobalStyle />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/buttons")}
      >
        <Text variant="h4">Button</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/modal")}
      >
        <Text variant="h4">Modal</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/login")}
      >
        <Text variant="h4">Login</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/loader")}
      >
        <Text variant="h4">Loader</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/navbar")}
      >
        <Text variant="h4">Navbar</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/topbar")}
      >
        <Text variant="h4">Topbar</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/general-container")}
      >
        <Text variant="h4">General Container</Text>
      </Button>
      <Spacer vertical="18" />
      <Button
        size="2xs"
        color="primary"
        hover
        onClick={() => navigate("/forms")}
      >
        <Text variant="h4">Forms</Text>
      </Button>
    </MainContainer>
  );
}

export default Home;
