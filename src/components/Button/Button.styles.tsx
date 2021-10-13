import styled, { css } from "styled-components";

interface Props {
  variant: string;
  size: string;
}

const Variants: { [key: string]: any } = {
  primary: css`
    background: linear-gradient(
      280.97deg,
      rgb(255, 95, 249) -36.25%,
      rgb(95, 130, 255) 124.95%
    );
  `,
  secondary: css`
    background: linear-gradient(280.97deg, #33343e -36.25%, #2c2d35 124.95%);
  `,
};

const Sizes: { [key: string]: any } = {
  small: css`
    font-size: 14px;
    line-height: 20px;
    padding: 8px 25px 8px;
  `,
  medium: css`
    font-size: 16px;
    line-height: 30px;
    padding: 12px 35px 12px;
  `,
  large: css`
    font-size: 18px;
    line-height: 30px;
    padding: 19px 50px 19px;
  `,
};

export const ButtonStyle = styled.button<Props>`
  position: relative;
  display: flex;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-weight: 400;
  overflow: hidden;
  z-index: 1;
  transition: all 0.5s ease 0s;
  border: none;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;

  &:after {
    content: "";
    position: absolute;
    right: -15px;
    top: 0;
    width: 26px;
    height: 100%;
    background: #ffffff;
    opacity: 0.2;
    z-index: 0;
    transform: skewX(-22deg);
    transition: all 0.5s ease;
  }
  &:hover {
    color: #fff;
    &:after {
      right: 0;
      width: 100%;
      transform: skewX(0deg);
    }
  }

  ${(props) => Variants[props.variant]}
  ${(props) => Sizes[props.size]}
`;
