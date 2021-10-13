import React from "react";

import Skeleton from "../Loader/Skeleton.styles";
import { NavItemStyle } from "./NavItem.styles";

const NavItemLoading: React.FC = () => {
  return (
    <>
      <NavItemStyle as="a">
        <Skeleton width="80px" />
      </NavItemStyle>
    </>
  );
};

export default NavItemLoading;
