import styled from "styled-components";
type Icon = {
color:string
}
export const CardContainer = styled.div`
  width: 20rem;
  padding: 6em 16px 6em 16px;
  &.shadow{
    box-shadow: -26px 21px 31px 8px rgba(0,0,0,0.24);
    border-radius: 1ch;
  }
`;

export const IconWrapper = styled.div<Icon>`
  font-size: 48px;
  color: ${props => props.color};
`;
