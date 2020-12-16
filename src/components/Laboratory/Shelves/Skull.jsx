/** @jsx jsx */
import StyledComponent from './StyledComponent';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';

const eyes = keyframes`
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
`;

export const StyledSkull = styled(StyledComponent)`
  width: 60px;
  height: 60px;
  bottom: 100%;
  right: 12%;
  .head {
    width: 100%;
    height: 100%;
    border-radius: 30px 30px 18px 18px;
    background-color: #feffff;
    overflow: hidden;

    &::before {
      width: 50%;
      height: 100%;
      right: 0;
      background-color: rgba(20, 1, 30, 0.15);
    }

    .skull-stain {
      width: 40px;
      height: 20px;
      left: -2px;
      top: -5px;
      border-radius: 10px;
      background-color: #3ebcbc;
      transform: skewX(-10deg);

      &::before {
        width: 10px;
        height: 20px;
        border-radius: 5px;
        background-color: #3ebcbc;
        top: 12px;
        left: 6px;
      }
    }
  }

  .eye {
    left: 15%;
    top: 37%;
    background-color: #14011e;
    width: 17px;
    height: 24px;
    border-radius: 20px;
    transform: rotate(20deg);

    &::after {
      background-color: #ee8228;
      width: 8px;
      height: 8px;
      border-radius: 10px;
      top: 8px;
      left: 4px;
      box-shadow: 0 0 2px #ee8228, 0 0 6px #ee8228;
      animation: ${eyes} 15s linear infinite;
    }

    &:nth-of-type(2) {
      left: auto;
      right: 15%;
      transform: rotate(-20deg);
    }
  }

  .nose {
    top: 76%;
    left: 40%;
    background-color: #14011e;
    width: 5px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 7px 0 #14011e;
  }

  .teeth {
    background-color: #feffff;
    width: 60%;
    height: 10px;
    top: 92%;
    left: 20%;
    border-radius: 5px;

    &::before {
      width: 50%;
      height: 100%;
      right: 0;
      background-color: rgba(20, 1, 30, 0.15);
    }
  }

  .tooth {
    top: 50%;
    width: 8px;
    height: 10px;
    background-color: #feffff;
    border-radius: 2px;

    &::after {
      height: 100%;
      right: 0;
    }
    &:nth-of-type(2) {
      left: 14px;
    }
    &:nth-of-type(2):after {
      width: 50%;
      background-color: rgba(20, 1, 30, 0.15);
    }
    &:nth-of-type(3) {
      left: 28px;
    }
    &:nth-of-type(3):after {
      width: 100%;
      background-color: rgba(20, 1, 30, 0.15);
    }
  }
`;

const Skull = ({ shadow, ...props }) => (
  <StyledSkull {...props}>
    <div className="head">
      {shadow || (
        <React.Fragment>
          <div className="skull-stain" />
          <div className="eye" />
          <div className="eye" />
          <div className="nose" />
        </React.Fragment>
      )}
    </div>
    <div className="teeth">
      {shadow || (
        <React.Fragment>
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
        </React.Fragment>
      )}
    </div>
  </StyledSkull>
);

export default Skull;

Skull.propTypes = {
  shadow: PropTypes.bool,
};

Skull.defaultProps = {
  shadow: false,
};
