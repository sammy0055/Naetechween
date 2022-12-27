import styled from "styled-components";
import { theme } from "../../../pages/home";

export const BigButton = styled.button`
  width: 11rem;
  height: 3rem;
  color: ${(props: { theme: theme }) => props.theme.buttonColors.tex_secondary};
  background-color: ${(props: { theme: theme }) =>
    props.theme.buttonColors.bg_primary};
  border-style: none;
  border-radius: 1ch;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  margin: 12px;
  padding:6px;
`;
