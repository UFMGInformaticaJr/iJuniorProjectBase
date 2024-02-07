import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
//import casal from "../assets/casal.png";

export const InternalContainerNavbar = styled.div`
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkContainerNavbar = styled.a`
  width: 80%;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-araound;

  border-radius: 10px;
  cursor: pointer;

  text-decoration: none;

  &:hover {
    filter: invert(0.25);
  }
`;

export const FooterContainerNavbar = styled.div`
  width: 11.625rem;
  height: 2.875rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InternalFooterContainerNavbar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InternalContainerTopbar = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 4rem);
  height: 100%;
  margin-left: 2rem;
  justify-content: space-between;
`;

export const LinkContainerTopbar = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface BottomBarTopbarProps {
  color: string;
}

export const BottomBarTopbar = styled.span<BottomBarTopbarProps>`
  border-bottom: 4px solid ${(props) => props.theme.theme.colors[props.color]};
  border-radius: 25%;
  position: relative;
  top: 1.75rem;
`;

export const MainContainerLoader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const MainContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 50;
`;

export const TopContainerInModal = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  padding: 1.25rem 1.25rem;
  justify-content: space-between;
  @media (max-width: ${theme.breakpoints.t}) {
    height: calc(4rem * 0.75);
  }
  @media (max-width: ${theme.breakpoints.ml}) {
    height: calc(4rem * 0.5);
  }
`;

export const TopContainerInModalPopUp = styled.div`
  display: flex;
  height: 4rem;
  width: 100%;
  align-items: center;
  padding: 1.25rem 1.25rem;
  justify-content: space-between;
  min-height: 6rem; // Use min-height ao invés de height

  @media (max-width: ${theme.breakpoints.t}) {
    min-height: calc(4rem * 0.75);
  }
  @media (max-width: ${theme.breakpoints.ml}) {
    min-height: calc(4rem * 0.5);
  }
`;

export const MainBoxFilterModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

interface MainContainerModalProps {
  type?: string;
  onClick?: () => void;
  ref?: React.RefObject<HTMLHeadingElement>;
}

export const MainContainerInModal = styled.div<MainContainerModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 63%;
  align-items: center;
  padding: 1.25rem 1.25rem;
  @media (max-width: ${theme.breakpoints.t}) {
    ${(props) => {
      if (props.type === "3") {
        return css`
          height: 63%;
        `;
      } else {
        return css`
          height: calc(63% * 0.8);
        `;
      }
    }}
  }
  @media (max-width: ${theme.breakpoints.ml}) {
    ${(props) => {
      if (props.type === "3") {
        return css`
          height: calc(63% * 0.96);
        `;
      } else if (props.type === "validation") {
        return css`
          height: calc(63% * 0.5);
        `;
      } else {
        return css`
          height: calc(63% * 0.8);
        `;
      }
    }};
    padding: 0.625rem 0.9375rem;
  }
`;

export const BottomContainerInModal = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 1.25rem;
  justify-content: center;
`;

export const CenterContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface MainContainerProps {
  imgUrl?: string;
  ismobile?: boolean;
}

export const MainContainer = styled.div<MainContainerProps>`
  height: 100% - 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.ismobile) {
      return css`
        height: 100%;
      `;
    } else {
      return css`
        height: 100vh;
      `;
    }
  }}
`;

export const FormContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.backgroundBox};
  border-radius: ${theme.borderRadius.r};
  box-shadow: ${theme.shadows.accessContainer};
  z-index: 1;
  padding: 0.4rem;
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CenterHorizontalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CenterHorizontalContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterVerticalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface LineProps {
  color?: string;
  weight?: string;
}

export const LineHorizontal = styled.div<LineProps>`
  width: 100%;
  height: 0.8px;

  ${(props) => {
    if (props.color) {
      return css`
        background-color: ${props.theme.theme.colors[props.color]};
      `;
    } else {
      return css``;
    }
  }}
`;

export const LineVertical = styled.div<LineProps>`
  width: 0.8px;
  height: 100%;
  background-color: #c4c4c4;
  ${(props) => {
    if (props.color) {
      return css`
        background-color: ${props.theme.theme.colors[props.color]};
      `;
    } else {
      return css`
        background-color: #c4c4c4;
      `;
    }
  }}
  ${(props) => {
    if (props.weight) {
      return css`
        width: ${props.weight + "px"};
      `;
    } else {
      return css`
        width: 0.8px;
      `;
    }
  }}
`;

export const MainAceessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightAccessContainer = styled.div`
  display: flex;
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0 2rem;
`;

export const LeftAccessContainer = styled.div`
  width: calc(50% - 0.8px);
  height: 100%;
  padding: 0 2rem;
`;

export const TitleGeneralContainer = styled.div`
  width: 90%;
  display: flex;
`;

export const TitleStartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
`;

export const ContentGeneralContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0rem;
`;

export const TopContainerTopBarMobile = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  align-items: center;
  justify-content: space-between;
`;

export const TopContainerGeneralFilterContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
`;

export const LinkContainerGeneralFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface BottomBarGeneralFIlterContainerProps {
  color: string;
}

export const BottomBarGeneralFIlterContainer = styled.span<BottomBarGeneralFIlterContainerProps>`
  border-bottom: 4px solid ${(props) => props.theme.theme.colors[props.color]};
  position: relative;
`;

export const ContainerFormsInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

interface ContainerFormsProps {
  ismobile?: boolean;
}

export const ContainerForms = styled.div<ContainerFormsProps>`
  width: calc(100% - 2rem);
  height: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => {
    return css`
      margin-left: ${props.ismobile ? "1rem" : "2rem"};
    `;
  }}
`;

interface PropertiesCardtProps {
  ismobile?: boolean;
  imgUrl?: string;
}

export const PropertiesCard = styled.div<PropertiesCardtProps>`
  width: 80%;
  max-width: 296px;
  height: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  background: ${theme.colors.cardBackground};
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.ismobile &&
    css`
      width: 100%;
      max-width: 100%;
      padding: 0;
    `}

  /* Estilos de hover */
  &:hover {
    box-shadow: 0px 6px 20px rgba(30, 30, 30, 0.2);
    //fazer um filtro pra deixar um pouco mais escuro
    filter: brightness(0.97);
  }

  &:img {
    width: 65%;
    height: 65%;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
  }
`;

export const MoreInfoCard = styled.div`
  width: 100%;
  margin-left: 1.5rem;
`;

interface ListCardProps {
  ismobile?: boolean;
  imgUrl?: string;
}
interface DiscountCouponCardProps {
  ismobile?: boolean;
  imgUrl?: string;
}

export const ListCard = styled.div<ListCardProps>`
  width: 100%;
  max-width: 228px;
  height: 100%;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: ${theme.colors.cardBackground};
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.ismobile &&
    css`
      width: 100%;
      max-width: 100%;
      padding: 0;
    `}

  /* Estilos de hover */
  &:hover {
    box-shadow: 0px 6px 20px rgba(30, 30, 30, 0.2);
    //fazer um filtro pra deixar um pouco mais escuro
    filter: brightness(0.97);
  }

  &:img {
    width: 65%;
    height: 65%;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
  }
`;

export const ListCardCoupons = styled.div<ListCardProps>`
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: ${theme.colors.cardBackground};
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.ismobile &&
    css`
      width: 100%;
      max-width: 100%;
      padding: 0;
    `}

  /* Estilos de hover */
  &:hover {
    box-shadow: 0px 6px 20px rgba(30, 30, 30, 0.2);
    //fazer um filtro pra deixar um pouco mais escuro
    filter: brightness(0.97);
  }

  &:img {
    width: 65%;
    height: 65%;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
  }
`;

export const ListCardDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
`;

export const DiscountCouponCard = styled.div<DiscountCouponCardProps>`
  width: 100%;
  max-width: 30rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 1.9rem;
  padding-left: 1.9rem;
  padding-right: 1.9rem;
  padding-top: 0rem;
  background: ${theme.colors.cardBackground};
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
  border-radius: 10px;
  cursor: pointer;

  // @media (max-width: ${theme.breakpoints.t}) {
  //   height: calc(4rem * 10);
  //   width: 70%;
  //   display: flex;
  //   align-items: center,
  //   justify-content: center
  // }

  ${(props) =>
    props.ismobile &&
    css`
      width: 100%;
      height: 70%;
      display: flex;
    `}

  /* Estilos de hover */
  &:hover {
    box-shadow: 0px 6px 20px rgba(30, 30, 30, 0.2);
    //fazer um filtro pra deixar um pouco mais escuro
    filter: brightness(0.97);
  }

  &:img {
    width: 65%;
    height: 65%;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
  }
`;

export const DiscountCouponCardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.4rem;
`;

interface DetailsCardProps {
  ismobile?: boolean;
  imgUrl?: string;
}

export const DetailsCard = styled.div<DetailsCardProps>`
  width: 80%;
  max-width: 32rem;
  min-height: 34rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 1.9rem;
  padding-left: 1.9rem;
  padding-right: 1.9rem;
  padding-top: 0rem;
  background: ${theme.colors.cardBackground};
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.ismobile &&
    css`
      width: 100%;
      max-width: 14rem;
    `}
`;

export const DetailsCardInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.4rem;
`;

interface ContainerNavbarProps {
  ismobile?: boolean;
}

export const ContainerNavbar = styled.div<ContainerNavbarProps>`
  width: 84%;
  height: auto;
  display: flex;
  position: relative;
  border-radius: 20px;
`;

export const ContainerNavbarSide = styled.div`
  width: 75%;
  height: 100%;
`;

export const ContainerName = styled.div`
  height: 10%;
  display: flex;
`;

export const ContainerData = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  background: white;
  border-radius: 0 10px 10px 0;
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
`;

export const ExternContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInputs = styled.div`
  height: 90%;
  border-radius: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

export const LoadingStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface InputImageProps {
  color?: string;
}

export const InputImage = styled.div<InputImageProps>`
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px dotted;
  border-radius: 0.4rem;

  ${(props) =>
    props.color &&
    css`
      border-color: white;
    `}
`;

export const StyleCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
`;

interface SelectionSignatureProps {
  ismobile?: boolean;
}

export const SelectionSignature = styled.div<SelectionSignatureProps>`
  width: 98%;
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: flex-start;
  /* background-color: ${theme.colors.greyPrice}; */
  background-color: #f3f3f3;
  border-bottom: 1px solid ${theme.colors.grey};

  ${(props) =>
    props.ismobile &&
    css`
      width: 100%;
      max-width: 14rem;
    `}
`;

export const SelectionSignatureDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

export const SelectionSignaturePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

export const SelectionSignatureInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SelectionSignatureLeftInfos = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CenterCardsProperties = styled.div`
  padding: 10%;
`;

export const CenterPropertiesList = styled.div`
  padding: 0 10% 10% 10%;
  padding-top: 8rem;
`;

interface FilterStyleProps {
  ismobile?: boolean;
}

export const FilterStyle = styled.div<FilterStyleProps>`
  margin-left: 20px;
  width: 90%;
  min-height: 9rem;
  box-shadow: 0px 4px 10px rgba(30, 30, 30, 0.2);
  padding: 20px;
  border-radius: 10px;
  background: #00000005;

  ${(props) =>
    props.ismobile &&
    css`
      height: 20rem;
    `}
`;

interface ColumnStyleProps {
  width?: string;
}

export const ColumnStyle = styled.div<ColumnStyleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

interface RowStyleProps {
  // center?: boolean;
  // align?: boolean;
  // justify?: boolean;
  // space: boolean;
  position?: string;
}

export const RowStyle = styled.div<RowStyleProps>`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${(props) => {
    switch (props.position) {
      case "center":
        return css`
          justify-content: center;
          align-items: center;
        `;
      case "align":
        return css`
          align-items: center;
        `;
      case "justify":
        return css`
          justify-content: center;
        `;
      case "space":
        return css`
          justify-content: space-between;
        `;
      default:
        return css``;
    }
  }}
`;

export const FilterInput = styled.input`
  width: 40%;
  height: 1.8rem;
  background-color: #4e4e4e;
  border: none;
  color: white;
  padding: 10px 10px 10px 15px;
  font-size: 75%;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
`;

export const PointerFlex = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const GeneralTitle = styled.div`
  width: 100%;
  height: 10%;
  padding: 0rem 0 0 0rem;

  @media (max-width: 768px) {
    /* Estilos específicos para dispositivos móveis */
    width: 100%;
    height: 9%;
    padding: 0 0 0 1rem;
    font-size: 1.2rem;
  }
`;

export const TitleButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 58vw;
`;

export const TitleButtonMobile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const GeneralHeader = styled.div`
  padding-top: 0rem;
  padding-right: 2rem;
  padding-left: 0rem;
`;

export const ArrowPosition = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
`;

export const RowStyleEnd = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
