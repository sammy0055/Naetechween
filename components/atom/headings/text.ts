import styled from "styled-components";
import { theme } from "../../../pages";

export const SmHeading = styled.h4`
  color: ${(props: { theme: theme }) => props.theme.textColors.secondary};
  font-size: 1rem;
  font-weight: bolder;
  font-family: Roboto;
  text-transform: capitalize;
  padding-top: 6rem;
`;

export const Bigheading = styled(SmHeading)`
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
  font-size: 48px;
  padding: 0;
`;

export const Heading = styled(Bigheading)`
  font-size: larger;
`;

export const MediumHeading = styled.h4`
  font-size: larger;
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
  text-align: center;
`;

export const Parahraph = styled.p`
  color: ${(props: { theme: theme }) => props.theme.textColors.secondary};
`;
