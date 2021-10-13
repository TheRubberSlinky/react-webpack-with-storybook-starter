import React from "react";
import { EmptyStyle } from "./Empty.styles";

interface Props {}

export const Empty: React.FC<Props> = (props) => {
  return <EmptyStyle {...props} />;
};

export default Empty;
