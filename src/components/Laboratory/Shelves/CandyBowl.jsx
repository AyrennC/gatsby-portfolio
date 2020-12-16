/** @jsx jsx */
import StyledComponent from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';

const DynamicCandyBowlStyle = ({ theme: { colors } }) => css`
  width: 75px;
  height: 75px;
  right: 17px;
  border-radius: 50%;
  background-color: #e6eff2;
  bottom: 22px;

  &::after {
    bottom: -1px;
    height: 6px;
    width: 46px;
    background: linear-gradient(
      to right,
      #e6eff2 50%,
      #a8dcea 50%,
      #a8dcea 100%
    );
    border-radius: 3px;
    left: calc(50% - 23px);
  }

  .candy-bowl-top {
    height: 5px;
    width: 40px;
    background: linear-gradient(
      to right,
      #e6eff2 50%,
      #a8dcea 50%,
      #a8dcea 100%
    );
    border-radius: 3px;
    left: calc(50% - 20px);
    top: 0;
    z-index: 20;
  }

  .candy-bowl-in {
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    border-radius: 60px;
    overflow: hidden;

    &::after {
      background-color: ${colors.primary.dark};
      width: 50%;
      height: 100%;
      right: 0;
      border-radius: 0 50px 50px 0;
      z-index: 16;
      opacity: 0.1;
    }
  }

  .candy-bowl-reflection {
    opacity: 0.7;
    border-radius: 0 0 0 50px;
    border: 6px solid ${colors.grey.white};
    border-top: 0;
    border-right: 0;
    width: 30px;
    height: 30px;
    bottom: 10px;
    left: 10px;
    z-index: 21;

    &::after {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${colors.grey.white};
      bottom: 20px;
      left: -6px;
      box-shadow: 27px 26px ${colors.grey.white};
    }
  }

  .candy-purple {
    width: 20px;
    height: 20px;
    background-color: #ed42e4;
    border-radius: 50%;
    bottom: 2px;
    left: 12px;
    background: conic-gradient(
      #ed42e4 0,
      #ed42e4 12.5%,
      ${colors.primary.regular} 0 25%,
      #ed42e4 25%,
      #ed42e4 37.5%,
      ${colors.primary.regular} 37.5%,
      ${colors.primary.regular} 50%,
      #ed42e4 50%,
      #ed42e4 62.5%,
      ${colors.primary.regular} 62.5%,
      ${colors.primary.regular} 75%,
      #ed42e4 75%,
      #ed42e4 87.5%,
      ${colors.primary.regular} 87.5%,
      ${colors.primary.regular} 100%
    );
    transform: rotate(-25deg);
    z-index: 1;

    &::after {
      opacity: 0.6;
      border-radius: 0 0 0 50px;
      border: 3px solid ${colors.grey.white};
      border-top: 0;
      border-right: 0;
      width: 8px;
      height: 8px;
      bottom: 8px;
      left: 2px;
      z-index: 10;
      transform: rotate(45deg);
    }

    &:nth-of-type(2) {
      top: 5px;
      left: 45px;
      z-index: 8;
    }

    &:nth-of-type(3) {
      top: 10px;
      left: 5px;
      z-index: 12;
    }

    &:nth-of-type(4) {
      top: 29px;
      left: 30px;
      z-index: 5;
    }
  }

  .candy-orange {
    width: 16px;
    background-color: #ee8228;
    left: 30px;
    bottom: 1px;
    height: 60%;
    right: 70%;
    top: 20%;
    border-radius: 20% 50% 50% 20%;
    transform: rotateY(-35deg);

    .candy-reflection {
      background-color: ${colors.grey.white};
      width: 60%;
      height: 60%;
      border-radius: 50%;
      top: 5%;
      left: 15%;
      opacity: 0.3;
    }

    &:nth-of-type(5) {
      top: 35px;
      left: 50px;
      transform: rotate(-45deg);
      z-index: 11;
    }

    &:nth-of-type(6) {
      top: 40px;
      left: 2px;
      transform: rotate(-45deg);
    }

    &:nth-of-type(7) {
      top: 13px;
      left: 28px;
      transform: rotate(25deg);
    }
  }

  .candy-teal {
    width: 20px;
    height: 12px;
    border-radius: 3px;
    overflow: hidden;
    background-image: repeating-linear-gradient(
      -40deg,
      ${colors.grey.white},
      ${colors.grey.white} 3px,
      #3ebcbc 3px,
      #3ebcbc 6px
    );
    left: 15px;
    top: 25px;
    z-index: 3;
    transform: rotate(-15deg);

    &::after {
      width: 100%;
      height: 4px;
      bottom: 0;
      background-color: #329399;
      opacity: 0.5;
    }

    &:nth-of-type(9) {
      top: 22px;
      left: 48px;
      transform: rotate(-15deg);
    }

    &:nth-of-type(10) {
      top: 30px;
      left: -3px;
      transform: rotate(-85deg);
    }

    &:nth-of-type(11) {
      top: 45px;
      left: 35px;
      transform: rotate(25deg);
    }
  }

  .candy-dark-purple {
    width: 30px;
    height: 10px;
    border-radius: 3px;
    left: 20px;
    top: 5px;
    background-color: ${colors.primary.dark};
    transform: rotate(5deg);
    z-index: 1;

    &::after {
      background-color: ${colors.primary.dark};
      width: 50%;
      height: 60%;
      left: 70%;
      top: 20%;
      border-radius: 50% 20% 20% 50%;
      transform: rotateY(35deg);
    }

    &::before {
      background-color: ${colors.primary.dark};
      width: 50%;
      height: 60%;
      right: 70%;
      top: 20%;
      border-radius: 20% 50% 50% 20%;
      transform: rotateY(-35deg);
    }

    .candy-reflection {
      background-color: ${colors.primary.light};
      width: 80%;
      height: 4px;
      border-radius: 2px;
      bottom: 2px;
      left: 2px;
      z-index: 20;
      opacity: 0.7;
    }

    &:nth-of-type(14) {
      top: 50px;
      left: 40px;
      transform: rotate(-45deg);
      z-index: 2;
    }

    &:nth-of-type(15) {
      top: 30px;
      left: -3px;
      transform: rotate(-85deg);
      z-index: 13;
    }

    &:nth-of-type(16) {
      top: 43px;
      left: 22px;
      transform: rotate(25deg);
      z-index: 2;
    }
  }
`;

export const StyledCandyBowl = styled(StyledComponent)`
  ${DynamicCandyBowlStyle};
`;

const CandyBowl = ({ shadow, ...props }) => (
  <StyledCandyBowl {...props}>
    <div className="candy-bowl-top" />
    {shadow || (
      <React.Fragment>
        <div className="candy-bowl-in">
          <div className="candy-purple" />
          <div className="candy-purple" />
          <div className="candy-purple" />
          <div className="candy-purple" />
          <div className="candy-orange">
            <div className="candy-reflection" />
          </div>
          <div className="candy-orange">
            <div className="candy-reflection" />
          </div>
          <div className="candy-orange">
            <div className="candy-reflection" />
          </div>
          <div className="candy-orange">
            <div className="candy-reflection" />
          </div>
          <div className="candy-teal" />
          <div className="candy-teal" />
          <div className="candy-teal" />
          <div className="candy-teal" />
          <div className="candy-dark-purple">
            <div className="candy-reflection" />
          </div>
          <div className="candy-dark-purple">
            <div className="candy-reflection" />
          </div>
          <div className="candy-dark-purple">
            <div className="candy-reflection" />
          </div>
          <div className="candy-dark-purple">
            <div className="candy-reflection" />
          </div>
        </div>
        <div className="candy-bowl-reflection" />
      </React.Fragment>
    )}
  </StyledCandyBowl>
);

export default CandyBowl;

CandyBowl.propTypes = {
  shadow: PropTypes.bool,
};

CandyBowl.defaultProps = {
  shadow: false,
};
