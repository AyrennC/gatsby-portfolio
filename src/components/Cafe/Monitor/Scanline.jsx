/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const scanline = keyframes`
    0% {
        bottom: 100%;
    }
    80% {
        bottom: 100%;
    }
    100% {
        bottom: 0;
    }
`;

const Scanline = styled.div`
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  animation: ${scanline} 10s linear infinite;
`;

export default Scanline;
