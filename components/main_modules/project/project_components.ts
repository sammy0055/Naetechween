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
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Unorderlist = styled.ul`
  width: 50%;
`;

export const List = styled.li`
  margin-top: 12px;
  margin-bottom: 12px;
  color: ${(props: { theme: theme }) => props.theme.textColors.primary};
`;

export const Previewbox = styled.div`
  width: 90%;
  height: 70vh;
  background: #132f4c;
  margin-top: 8rem;
  margin-left: 12px;
  border-radius: 3ch;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IframBox = styled.div`
  width: 80%;
  height: 50vh;
  background: white;
  border-radius: 1ch;
`;



export const Boxwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f262e;
`;
