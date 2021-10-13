import styled, { css } from "styled-components";

interface Props {
  underline?: true | false;
  size: number;
  as?: any | "h1";
}

const UnderlineStyle = css`
  padding: 0 0 1rem 0;
  border-bottom: 2px solid #000;
  display: inline-block;
`;

export const HeadingStyle = styled.div<Props>`
  font-size: ${({ size }) => 2 / size}em; // <- dynamic font size
  font-weight: 500;
  margin: 0 0 1rem 0;
  font-family: ${({ theme }) => theme.fonts.rohn};

  ${({ underline }) => underline && UnderlineStyle};
`;
