import styled from "styled-components";
import { theme } from "../../../pages";
import { MediumHeading } from "../../atom/headings/text";

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
  /* text-align: center; */
  margin-right: 3em;
  margin-left: 3em;
`;

export const Box2 = styled.div<styleType>`
  width: 50%;
  height: 80vh;
`;

export const Mheading = styled(MediumHeading)`
  padding-top: 6em;
  text-align: left;
`;

export const ContributionListwrapper = styled.div`
  display: flex;
`;

export const List = styled.li`
margin-top: 12px;
margin-bottom: 12px;
color: ${(props: { theme: theme }) => props.theme.textColors.primary};
`
