import GlobalStyle from "../styles/GlobalStyle";

import { MainContainer } from "../utils/Containers/Containers";

import Box from "../Components/Box";
import Loader from "../Components/Loader";
import Spacer from "../Components/Spacer";

function LoaderPage() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Spacer vertical="32" />
      <Box
        size="modalSizeType1"
        backgroundColor="backgroundBox"
        rounded
        shadow="button"
      >
        <Loader color="primary" size="sm" />
      </Box>
      <Spacer vertical="15" />
      <Box
        size="modalSizeType1"
        backgroundColor="backgroundBox"
        rounded
        shadow="button"
      >
        <Loader color="secondary" size="xs" transition="linear" />
      </Box>
      <Spacer vertical="15" />
      <Box
        size="modalSizeType1"
        backgroundColor="backgroundBox"
        rounded
        shadow="button"
      >
        <Loader color="success" size="md" transition="ease-in-out" />
      </Box>
      <Spacer vertical="15" />
      <Box
        size="modalSizeType1"
        backgroundColor="backgroundBox"
        rounded
        shadow="button"
      >
        <Loader color="warning" size="lg" transition="ease-in" />
      </Box>
      <Spacer vertical="15" />
      <Box
        size="modalSizeType1"
        backgroundColor="backgroundBox"
        rounded
        shadow="button"
      >
        <Loader color="danger" size="xl" transition="ease-out" />
      </Box>
      <Spacer vertical="32" />
    </MainContainer>
  );
}

export default LoaderPage;
