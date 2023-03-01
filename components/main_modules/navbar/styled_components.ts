import styled from "styled-components";
import Link from "next/link";
import { theme } from "../../../pages";

export const Appbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  border: 1px solid gray;
  position: fixed;
`;

export const Toolbar = styled.div`
  color: inherit;
  /* background-color: red; */
`;

export const AppbarLink = styled(Link)`
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  margin-left: 12px;
  margin-right: 12px;
  transition: color ease-in-out 0.2s;
  &:hover {
    color: #5a5e64;
  }
`;

export const LogoText = styled.span`
  width: 14px;
  height: 6px;
  color: #5feeef;
  background-color: #133541;
  padding: 8px;
  text-align: center;
  border-radius: 0.5ch;
  font-size: small;
  font-weight: bold;
  font-family: roboto;
`;
