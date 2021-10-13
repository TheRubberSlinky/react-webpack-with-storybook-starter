import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BrandStyle } from "./Brand.styles";

interface Props {
  color: "red" | "black" | "white";
  type: "badge" | "horizontal" | "vertical";
  height: number;
}

export const Brand: React.FC<Props> = ({
  color = "red",
  type = "horizontal",
  height = 70,
}) => {
  const [brand, setBrand] = useState();

  useEffect(() => {
    import(`../../assets/images/logo/${color}-logo-${type}.webp`).then(
      ({ default: image }) => setBrand(image)
    );
  }, [color, type]);

  return (
    <BrandStyle as={NavLink} to="/" height={height}>
      <img src={brand} alt="Mettlestate Logo" loading="lazy" />
    </BrandStyle>
  );
};

export default Brand;
