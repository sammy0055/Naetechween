import BigCta from "../../atom/btn/BigCta";
import { Bigheading, MediumHeading, SmHeading } from "../../atom/headings/text";
import {
  Box1,
  Box2,
  Pwrapper,
  Mheading,
  ContributionListwrapper,
  List,
  Unorderlist,
  Previewbox,
  Boxwrapper,
  IframBox,
} from "./project_components";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Project: React.FC = () => {
  return (
    <>
      <Pwrapper>
        .<SmHeading style={{ textAlign: "center" }}>Projects</SmHeading>
        <Boxwrapper>
          <Box1>
            <Mheading>Kindroom</Mheading>
            <Bigheading>
              A live rent free by providing <br /> value platform
            </Bigheading>
            {/* <BigCta
              type="button"
              text="visit webpage"
              Icon={BsArrowRight}
              showIcon
            /> */}
            <ContributionListwrapper>
              <Unorderlist>
                <List>
                  Monitored system performance and availability, proactively
                  identifying and resolving issues to ensure that the system
                  runs smoothly.
                </List>
                <List>
                  Stayed up-to-date with emerging technologies, trends, and best
                  practices in web development, and share knowledge with the
                  team.
                </List>
                <List>Developed new features and functionalities</List>
                <List>
                  Reviewed and provide feedback on other developers' code.
                </List>
              </Unorderlist>

              <Unorderlist>
                <List>Optimized system performance and scalability.</List>
                <List>Ensure system security and data protection.</List>
                <List>
                  Collaborated with cross-functional teams, such as product
                  management and design, to ensure that the product meets
                  business requirements and user needs.
                </List>
                <List>
                  Maintained and improve the codebase through refactoring, bug
                  fixing, and continuous improvement.
                </List>
              </Unorderlist>
            </ContributionListwrapper>
          </Box1>
          <Box2>
            <Previewbox>
              <IframBox>
              </IframBox>
            </Previewbox>
            {/* <Image src={""} alt="work sample" /> */}
          </Box2>
        </Boxwrapper>
      </Pwrapper>
    </>
  );
};

export default Project;
