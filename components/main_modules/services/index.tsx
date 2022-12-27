import { CardWrapper, ServiceContainer } from "../Banner/services_components";
import { Bigheading, SmHeading } from "../../atom/headings/text";
import Card from "../../organisms/card";
import cardData from "../../../data/card";

const Services: React.FC = () => {
  return (
    <>
      <ServiceContainer>
        <SmHeading>Services for you</SmHeading>
        <Bigheading>What Samuel Helps you?</Bigheading>
        <CardWrapper>
          {cardData.map(({ id, icon, color, heading, paragrah, classes }) => (
            <Card
              key={id}
              Icon={icon}
              heading={heading}
              paragrah={paragrah}
              color={color}
              classes={classes}
            />
          ))}
        </CardWrapper>
      </ServiceContainer>
    </>
  );
};

export default Services;
