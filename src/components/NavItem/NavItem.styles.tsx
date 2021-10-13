import styled from "styled-components";

export const NavItemStyle = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-size: 14px;
  padding: 1rem;
  &:hover,
  &:active,
  &.active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
