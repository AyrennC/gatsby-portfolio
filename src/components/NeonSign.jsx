/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const blink = keyframes`
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
    color: #333;
  }
  80% {

    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
`;

const NeonSignContainer = styled.div`
  text-align: left;
  height: 250px;
  user-select: none;

  b {
    font-size: 120px;
    @media (max-aspect-ratio: 7 / 8) {
      font-size: 20vw;
    }

    color: #fee;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444,
      0 0 0.1em #ff4444, 0 10px 3px #000;

    span {
      animation: ${blink} linear infinite 2s;
    }

    span:nth-of-type(2) {
      animation: ${blink} linear infinite 3s;
    }
  }
`;

const NeonSign = (props) => (
  <NeonSignContainer {...props}>
    <b>
      c<span>ar</span>n<span>eyc</span>.
    </b>
  </NeonSignContainer>
);

export default NeonSign;
