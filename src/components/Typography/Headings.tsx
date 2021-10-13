import React from "react";
import { HeadingStyle } from "./Headings.styles";

interface Props {
  underline?: true | false;
  size: number | 1;
  children?: any | "Heading";
  as?: any | "h1";
}

export const Heading: React.FC<Props> = (props) => {
  return <HeadingStyle as={`h${props.size}`} {...props} />;
};
