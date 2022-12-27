import { NextPage } from "next";
import { AppbarData } from "../../../data/Appbar";
import { Appbar, AppbarLink, LogoText, Toolbar } from "./styled_components";

const Navbar: NextPage = () => {
  return (
    <>
      <Appbar>
        <Toolbar>
          <LogoText>v1.4.0</LogoText>
        </Toolbar>
        <Toolbar>
          {AppbarData.map((item) => (
            <AppbarLink href={item.url}>
              <span>{item.name}</span>
              <span>{item.icon}</span>
            </AppbarLink>
          ))}
        </Toolbar>
      </Appbar>
    </>
  );
};

export default Navbar;
