import React from "react";
import Container from "../../wrappers/Container";
import Brand from "../Brand/Brand";
import NavItem from "../NavItem/NavItem";
import NavbarLoading from "./Navbar.loading";
import { BrandWrapper, NavbarStyle, NavItemsWrapper } from "./Navbar.styles";

interface Props {
  loading: true | false;
}

export const Navbar: React.FC<Props> = ({ loading }) => {
  return (
    <>
      <Container>
        <NavbarStyle>
          <BrandWrapper>
            <Brand color="red" type="horizontal" height={70} />
          </BrandWrapper>
          <NavItemsWrapper>
            {loading ? (
              <NavbarLoading repeat={3} />
            ) : (
              <>
                <NavItem link="/">Home</NavItem>
                <NavItem link="/about">About</NavItem>
                <NavItem link="/contact-us">Contact Us</NavItem>
              </>
            )}
          </NavItemsWrapper>
        </NavbarStyle>
      </Container>
    </>
  );
};

export default Navbar;
