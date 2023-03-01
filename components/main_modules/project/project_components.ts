import styled from "styled-components";
import { theme } from "../../../pages";

interface styleType {
  theme: theme;
}
export const Pwrapper = styled.div<styleType>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.serviceBodyColor.primary};
  position: sticky;
`;

export const Box1 = styled.div<styleType>`
  width: 50%;
  height: 80vh;
  text-align: center;
`;

export const Box2 = styled.div<styleType>`
  width: 50%;
  height: 80vh;
`;
