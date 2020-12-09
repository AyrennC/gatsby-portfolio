/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const glitchAnim = keyframes`
  0% {
    clip: rect(12px, 9999px, 78px, 0);
    transform: skew(0.5deg);
  }
  5% {
    clip: rect(32px, 9999px, 53px, 0);
    transform: skew(0.37deg);
  }
  10% {
    clip: rect(80px, 9999px, 98px, 0);
    transform: skew(0.38deg);
  }
  15% {
    clip: rect(13px, 9999px, 1px, 0);
    transform: skew(0.93deg);
  }
  20% {
    clip: rect(73px, 9999px, 71px, 0);
    transform: skew(0.85deg);
  }
  25% {
    clip: rect(45px, 9999px, 64px, 0);
    transform: skew(0.61deg);
  }
  30% {
    clip: rect(51px, 9999px, 10px, 0);
    transform: skew(0.41deg);
  }
  35% {
    clip: rect(7px, 9999px, 97px, 0);
    transform: skew(0.33deg);
  }
  40% {
    clip: rect(62px, 9999px, 89px, 0);
    transform: skew(0.6deg);
  }
  45% {
    clip: rect(84px, 9999px, 26px, 0);
    transform: skew(0.1deg);
  }
  50% {
    clip: rect(67px, 9999px, 56px, 0);
    transform: skew(0.38deg);
  }
  55% {
    clip: rect(49px, 9999px, 8px, 0);
    transform: skew(0.77deg);
  }
  60% {
    clip: rect(98px, 9999px, 13px, 0);
    transform: skew(0.87deg);
  }
  65% {
    clip: rect(100px, 9999px, 67px, 0);
    transform: skew(0.33deg);
  }
  70% {
    clip: rect(77px, 9999px, 58px, 0);
    transform: skew(0.05deg);
  }
  75% {
    clip: rect(86px, 9999px, 29px, 0);
    transform: skew(0.58deg);
  }
  80% {
    clip: rect(8px, 9999px, 66px, 0);
    transform: skew(0.17deg);
  }
  85% {
    clip: rect(80px, 9999px, 31px, 0);
    transform: skew(0.34deg);
  }
  90% {
    clip: rect(67px, 9999px, 27px, 0);
    transform: skew(0.36deg);
  }
  95% {
    clip: rect(66px, 9999px, 82px, 0);
    transform: skew(0.52deg);
  }
  to {
    clip: rect(67px, 9999px, 70px, 0);
    transform: skew(0.04deg);
  }
`;

const glitchAnim2 = keyframes`
  0% {
    clip: rect(27px, 9999px, 84px, 0);
    transform: skew(0.28deg);
  }
  5% {
    clip: rect(75px, 9999px, 51px, 0);
    transform: skew(0.79deg);
  }
  10% {
    clip: rect(57px, 9999px, 36px, 0);
    transform: skew(0.22deg);
  }
  15% {
    clip: rect(36px, 9999px, 19px, 0);
    transform: skew(0.7deg);
  }
  20% {
    clip: rect(16px, 9999px, 3px, 0);
    transform: skew(0.61deg);
  }
  25% {
    clip: rect(74px, 9999px, 3px, 0);
    transform: skew(0.75deg);
  }
  30% {
    clip: rect(42px, 9999px, 100px, 0);
    transform: skew(0.92deg);
  }
  35% {
    clip: rect(38px, 9999px, 25px, 0);
    transform: skew(0.74deg);
  }
  40% {
    clip: rect(15px, 9999px, 39px, 0);
    transform: skew(0.75deg);
  }
  45% {
    clip: rect(77px, 9999px, 27px, 0);
    transform: skew(0.76deg);
  }
  50% {
    clip: rect(88px, 9999px, 38px, 0);
    transform: skew(0.71deg);
  }
  55% {
    clip: rect(7px, 9999px, 16px, 0);
    transform: skew(0.78deg);
  }
  60% {
    clip: rect(66px, 9999px, 99px, 0);
    transform: skew(0.02deg);
  }
  65% {
    clip: rect(52px, 9999px, 11px, 0);
    transform: skew(0.67deg);
  }
  70% {
    clip: rect(11px, 9999px, 40px, 0);
    transform: skew(0.1deg);
  }
  75% {
    clip: rect(1px, 9999px, 27px, 0);
    transform: skew(0.34deg);
  }
  80% {
    clip: rect(89px, 9999px, 77px, 0);
    transform: skew(0.47deg);
  }
  85% {
    clip: rect(86px, 9999px, 100px, 0);
    transform: skew(0.1deg);
  }
  90% {
    clip: rect(28px, 9999px, 84px, 0);
    transform: skew(0.01deg);
  }
  95% {
    clip: rect(80px, 9999px, 58px, 0);
    transform: skew(0.93deg);
  }
  to {
    clip: rect(63px, 9999px, 85px, 0);
    transform: skew(0.87deg);
  }
`;

const glitchSkew = keyframes`
  0% {
    transform: skew(2deg);
}
  10% {
    transform: skew(5deg);
}
  20% {
    transform: skew(-3deg);
}
  30% {
    transform: skew(0deg);
}
  40% {
    transform: skew(-1deg);
}
  50% {
    transform: skew(1deg);
}
  60% {
    transform: skew(-3deg);
}
  70% {
    transform: skew(2deg);
}
  80% {
    transform: skew(-2deg);
}
  90% {
    transform: skew(-2deg);
}
  to {
    transform: skew(-4deg);
}
`;

const GlitchContainer = styled.span`
  display: inline-block;
  position: relative;
  animation: ${glitchSkew} 1s linear infinite alternate-reverse;
  letter-spacing: 2px;

  &:before {
    content: '${(props) => props.content}';
    position: absolute;
    top: 0;
    width: 110%;
    left: -5px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: ${glitchAnim} 5s linear infinite alternate-reverse;
  }

  &:after {
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    animation: ${glitchAnim2} 1s linear infinite alternate-reverse;
    content: '${(props) => props.content}';
    position: absolute;
    top: 0;
    width: 110%;
    left: 3px;
  }
`;

const Glitch = ({ children }) => (
  <GlitchContainer content={children}>{children}</GlitchContainer>
);

export default Glitch;

Glitch.propTypes = {
  children: PropTypes.string.isRequired,
};
