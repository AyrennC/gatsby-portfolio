/** @jsx jsx */
import StyledComponent from './StyledComponent';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';

const flame = keyframes`
  50% {
    transform: scale(0.9) rotate(45deg);
  }
`;

const flicker = keyframes`
  21%, 24% {
    transform: rotate(0deg);
  }
  22%, 23% {
    transform: rotate(40deg);
  }
`;

export const StyledCandles = styled(StyledComponent)`
  width: 50%;
  height: 40px;
  bottom: 10px;
  left: 15%;
`;

export const StyledCandle = styled(StyledComponent)`
  width: 30px;
  height: 30px;
  background-color: #ee8228;

  &::after {
    width: 50%;
    height: 100%;
    right: 0;
    background-color: #d16d1b;
  }

  &::before {
    z-index: -1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    bottom: 40px;
    left: -10px;
    background-color: #f5b987;
    opacity: 0.2;
  }

  .candle-reflection {
    width: 8px;
    height: 24px;
    background-color: #fdf0e5;
    opacity: 0.4;
    border-radius: 6px;
    left: 0;
    bottom: 5px;
  }

  .candle-wax {
    background-color: #f9d4b6;
    border-radius: 6px;
    width: 120%;
    left: -10%;
    height: 10px;
    top: -10px;
    z-index: 2;

    &::after {
      width: 8px;
      height: 20px;
      background-color: #f9d4b6;
      border-radius: 6px;
      left: 3px;
      top: 5px;
    }
    &::before {
      width: 8px;
      height: 12px;
      background-color: #f9d4b6;
      border-radius: 6px;
      right: 10px;
      top: 5px;
    }

    .wax-reflection-top {
      width: 20px;
      height: 8px;
      border-radius: 4px;
      background-color: #fdf0e5;
      opacity: 0.8;
      left: 0;
      top: 0;
      z-index: 4;
    }

    .wax-reflection {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #fdf0e5;
      opacity: 0.8;
      left: 3px;
      top: 20px;
      z-index: 4;
    }
  }

  .flame {
    width: 24px;
    height: 24px;
    bottom: 150%;
    left: 3px;
    animation: ${flicker} 15s linear infinite;

    .flame-in {
      width: 100%;
      height: 100%;
      background-color: #ee8228;
      border-radius: 0 50% 50%;
      transform: rotate(45deg);
      animation: ${flame} 2s linear infinite;

      &::before {
        border-radius: 0 50% 50%;
        background-color: #f5b987;
        height: 70%;
        width: 70%;
        bottom: 0;
        left: 30%;
      }
    }
  }

  &:nth-of-type(2) {
    left: 50px;
    height: 40px;
    bottom: 10px;
  }

  &:nth-of-type(2):before {
    bottom: 50px;
  }

  &:nth-of-type(2) .flame {
    bottom: 140%;
    animation-delay: 0.15s;
  }
`;

const Candle = ({ shadow, ...props }) => (
  <StyledCandle {...props}>
    <div className="candle-wax">
      {shadow || (
        <React.Fragment>
          <div className="wax-reflection" />
          <div className="wax-reflection-top" />
        </React.Fragment>
      )}
    </div>
    {shadow || <div className="candle-reflection" />}
    <div className="flame">{shadow || <div className="flame-in" />}</div>
  </StyledCandle>
);

Candle.propTypes = {
  shadow: PropTypes.bool,
};

Candle.defaultProps = {
  shadow: false,
};

const Candles = ({ shadow, ...props }) => (
  <StyledCandles {...props}>
    <Candle shadow={shadow} />
    <Candle shadow={shadow} />
  </StyledCandles>
);

export default Candles;

Candles.propTypes = {
  shadow: PropTypes.bool,
};

Candles.defaultProps = {
  shadow: false,
};
