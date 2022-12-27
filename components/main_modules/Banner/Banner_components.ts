import styled from "styled-components";
import { theme } from "../../../pages/home";
import Link from "next/link";

export const BannerWrapper = styled.div`
  display: flex;
  height: 95vh;
  background-color: inherit;
  position: sticky;
  top: 0;
  padding-top: 3rem;
`;

export const BannerContainer = styled.div`
  width: ${(props: { width: string }) => props.width};
  height: 92vh;
  border: 1px solid gray;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
  font-size: 48px;
  margin-bottom: 0px;
`;

export const BigText = styled(Title)`
  font-size: 8rem;
  font-weight: bolder;
  font-family: Roboto;
  margin: 0;
`;
export const Subtitle = styled.p`
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
`;

export const Version = styled(Link)`
  display: block;
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
  font-family: Roboto;
  text-decoration: underline;
  margin-left: -13rem;
`;

export const AvalableContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
`;

export const Avalable = styled.h4`
  color: ${(props: { theme: theme }) => props.theme.textColors.secondary};
  font-size: 1rem;
  font-weight: bolder;
  font-family: Roboto;
  text-transform: capitalize;
`;

export const Icon = styled.span`
  color: ${(props: { theme: theme }) => props.theme.textColors.secondary};
  font-size: 2rem;
  & ~ & {
    margin: 12px;
  }
`;
