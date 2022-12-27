import { NextPage } from "next";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiGraphql, SiExpress, SiFirebase } from "react-icons/si";
import {
  Avalable,
  AvalableContainer,
  BannerContainer,
  BannerWrapper,
  BigText,
  Icon,
  Subtitle,
  Title,
  Version,
} from "./Banner_components";
import BigCta from "../../atom/btn/BigCta";

const Banner: NextPage = () => {
  return (
    <>
      <BannerWrapper>
        <BannerContainer width="60%">
          <Title>
            Start a<br /> new project with
          </Title>
          <BigText>Minimal</BigText>
          <Subtitle>
            The starting point for your next project is based on MUI.
            <br />
            Easy customization Helps you build apps faster and better.
          </Subtitle>
          <BigCta
            type="button"
            Icon={BsLightningChargeFill}
            text="Live preview"
            showIcon
          />
          <BigCta
            type="button"
            Icon={MdOpenInNew}
            text="Design Preview"
            showIcon
          />
          <Version href={"#"}>
            <span>
              <MdOpenInNew /> get free version
            </span>
          </Version>
          <AvalableContainer>
            <Avalable>Avalabe for</Avalable>
            <Icon>
              <FaNodeJs />
            </Icon>
            <Icon>
              <SiGraphql />
            </Icon>
            <Icon>
              <SiExpress />
            </Icon>
            <Icon>
              <SiFirebase />
            </Icon>
            <Icon>
              <SiMongodb />
            </Icon>
            <Icon>
              <TbBrandNextjs />
            </Icon>
            <Icon>
              <FaReact />
            </Icon>
          </AvalableContainer>
        </BannerContainer>
        <BannerContainer width="40%"></BannerContainer>
      </BannerWrapper>
    </>
  );
};

export default Banner;
