import React from "react";
import { ButtonStyle } from "./Button.styles";

interface Props {
  variant: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
  children?: any | "Button Text";
}

export const Button: React.FC<Props> = (props) => {
  return <ButtonStyle {...props} />;
};

export default Button;
