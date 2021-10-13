import React from "react";
import { styled } from "@storybook/theming";

interface Props {
  children: any;
}

const ContainerStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
