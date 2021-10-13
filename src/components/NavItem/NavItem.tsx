import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemStyle } from "./NavItem.styles";

interface Props {
  link: string;
}

export const NavItem: React.FC<Props> = ({ link, children }) => {
  return (
    <NavItemStyle exact as={NavLink} to={link}>
      {children}
    </NavItemStyle>
  );
};

export default NavItem;
