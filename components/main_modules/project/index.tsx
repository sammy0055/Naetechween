import BigCta from "../../atom/btn/BigCta";
import { Bigheading, MediumHeading, SmHeading } from "../../atom/headings/text";
import { Box1, Box2, Pwrapper } from "./project_components";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Project: React.FC = () => {
  return (
    <>
      <Pwrapper>
        .
        <div style={{backgroundColor:"#1f262e"}}>
        <MediumHeading>Projects</MediumHeading>
          <Box1>
            <SmHeading>Kindroom</SmHeading>
            <Bigheading>For Designer</Bigheading>
            <BigCta
              type="button"
              text="visit webpage"
              Icon={BsArrowRight}
              showIcon
            />
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
