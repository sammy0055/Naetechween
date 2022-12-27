import { CardContainer, IconWrapper } from "./card_component";
import { Heading, Parahraph } from "../../atom/headings/text";

type Card = {
    Icon:any,
    color:string,
    heading:string,
    paragrah:string
    classes?:string 
}

const Card: React.FC<Card> = ({Icon, color, heading, paragrah, classes}) => {
  return (
    <>
      <CardContainer className={`${classes}`}>
        <IconWrapper color={color}>
          <Icon />
        </IconWrapper>
        <Heading>{heading}</Heading>
        <Parahraph>{paragrah}</Parahraph>
      </CardContainer>
    </>
  );
};

export default Card;
