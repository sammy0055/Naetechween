import BigCta from "../../atom/btn/BigCta";
import { Bigheading, MediumHeading, SmHeading } from "../../atom/headings/text";
import { Box1, Box2, Pwrapper, Mheading, ContributionListwrapper, List } from "./project_components";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Project: React.FC = () => {
  return (
    <>
      <Pwrapper>
        .
        <div style={{backgroundColor:"#1f262e"}}>
        <SmHeading style={{textAlign:"center"}}>Projects</SmHeading>
          <Box1>
            <Mheading>Kindroom</Mheading>
            <Bigheading>A live rent free by providing <br /> value platform</Bigheading>
            {/* <BigCta
              type="button"
              text="visit webpage"
              Icon={BsArrowRight}
              showIcon
            /> */}
            <ContributionListwrapper>
            <ul>
              <List>setup page security</List>
              <List>setup page security</List>
              <List>setup page security</List>
              <List>setup page security</List>
            </ul>

            <ul>
              <List>setup page security</List>
              <List>setup page security</List>
              <List>setup page security</List>
              <List>setup page security</List>
            </ul>
            </ContributionListwrapper>
          </Box1>
          <Box2>
            <Image src={""} alt="work sample" />
          </Box2>
        </div>
      </Pwrapper>
    </>
  );
};

export default Project;
