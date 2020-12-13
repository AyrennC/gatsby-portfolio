/** @jsx jsx */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { jsx } from 'theme-ui';

const RainContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const Droplet = styled.div`
  background: white;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  height: 50px;
  position: absolute;
`;

const random = (range = 1) => Math.random() * range;

const AnimateDroplet = (props) => {
  const top = random(50) + 50;
  const left = random(100);
  const opacity = (random(30) + 30) * 0.01;
  const delay = random(20) - 1;
  const width = random(1.5) + 1.5;

  const drop = keyframes`
    0% {
      left: ${left}%;
      opacity: ${opacity};
      top: -${top}%;
    }
    100% {
      opacity: 0;
      top: ${top + 40}%;
    }
  `;

  return (
    <Droplet
      css={css`
        animation-name: ${drop};
        animation-delay: ${delay};
        animation-duration: ${random(2) + 0.5}s;
        animation-iteration-count: infinite;
        left: ${left}%;
        opacity: ${opacity};
        top: -${top}%;
        width: ${width}px;
      `}
      {...props}
    />
  );
};

const animateDroplets = (n) => {
  const droplets = [];
  for (let i = 0; i < n; i += 1) {
    droplets.push(<AnimateDroplet key={i} />);
  }
  return droplets;
};

const Rain = ({ droplets, ...props }) => {
  const animatedDroplets = useMemo(() => animateDroplets(droplets), [droplets]);
  return <RainContainer {...props}>{animatedDroplets}</RainContainer>;
};

export default Rain;

Rain.propTypes = {
  droplets: PropTypes.number,
};

Rain.defaultProps = {
  droplets: 160,
};
