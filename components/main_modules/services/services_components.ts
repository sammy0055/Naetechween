import styled from "styled-components";
import { theme } from "../../../pages/home";

export const ServiceContainer = styled.div`
text-align: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props: { theme: theme }) =>
    props.theme.serviceBodyColor.primary};
  position: sticky;
`;

export const CardWrapper = styled.div`
display: flex;
justify-content: space-evenly;
`