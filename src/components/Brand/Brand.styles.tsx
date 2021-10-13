import styled from "styled-components";

interface Props {
  height: number;
}

export const BrandStyle = styled.div<Props>`
  img {
    max-height: calc(${({ height }) => height}px - 2rem);
  }
`;
