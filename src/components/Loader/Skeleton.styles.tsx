import styled, { keyframes } from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

const SkeletonAnimation = keyframes`
	0% {
		background-position: -200px 0;
	}

	100% {
		background-position: calc(200px + 100%) 0;
	}
`;

export default styled.div<Props>`
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;

  animation: ${SkeletonAnimation} 1.2s ease-in-out infinite;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "26px"};
`;
