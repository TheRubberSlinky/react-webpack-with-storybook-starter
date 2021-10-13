import React from "react";

import Repeater from "../Loader/Repeater";
import NavItemLoading from "../NavItem/NavItem.loading";

interface Props {
  repeat?: Number;
}

const NavbarLoading: React.FC<Props> = ({ repeat = 1 }) => {
  return (
    <>
      <Repeater repeat={repeat}>
        <NavItemLoading />
      </Repeater>
    </>
  );
};

export default NavbarLoading;
