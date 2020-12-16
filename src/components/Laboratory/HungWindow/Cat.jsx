/** @jsx jsx */
import StyledComponent from '../StyledComponent';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';

const earRight = keyframes`
  0%, 20%, 75%, 100% {
    transform: rotate(60deg);
  }
  25%  {
    transform: rotate(65deg);
  }
  30% {
    transform: rotate(60deg);
  }
  76% {
    transform: rotate(72deg);
  }
  77% {
    transform: rotate(60deg);
  }
`;

const earLeft = keyframes`
  0%, 20%, 50%, 100% {
    transform: rotate(45deg);
  }
  21%, 23%, 45% {
    transform: rotate(36deg);
  }
  22%, 24%, 44% {
    transform: rotate(45deg);
  }
`;

const tail = keyframes`
  0%, 20%, 75%, 100% {
    transform: rotate(-13deg);
  }
  35% {
    transform: rotate(8deg);
  }
  45% {
    transform: rotate(-10deg);
  }
  10%, 55%, 85% {
    transform: rotate(13deg);
  }
`;

const HighlightStyle = css`
  transform: translate(-1px, -2px) scale(0.92);
  transform-origin: bottom center;

  * {
    background-color: #8f65a9 !important;
  }

  .neck {
    background-color: #8f65a9 !important;
  }

  .ear {
    background-color: transparent !important;

    .ear-in {
      background-color: #8f65a9 !important;
    }
  }
`;

const StyledCat = styled(StyledComponent)`
  width: 100px;
  z-index: 4;
  height: 150px;
  bottom: 7px;
  left: 80px;
  transform: scale(0.9);
  transform-origin: bottom center;

  ${({ highlight }) => highlight && HighlightStyle};
`;

const StyledCatTail = styled(StyledComponent)`
  background-color: #1c0526;
  height: 40px;
  width: 13px;
  border-radius: 50px;
  bottom: -25px;
  right: -0px;

  .tail {
    bottom: 2px;
    background-color: #1c0526;
    height: 12px;
    width: 13px;
    border-radius: 20px 20px 0 0px;
    z-index: 1;
    animation: ${tail} 15s ease infinite;
    transform: rotate(13deg);
    transform-origin: center center;

    .tail {
      bottom: -40%;
    }

    &.last {
      border-radius: 20px;
    }
  }

  ${({ shadow }) =>
    shadow &&
    css`
      transform: scale(1.15, 1.1) translate(-8px, 0px);
      background-color: #501e70;
      z-index: -1;

      .tail {
        background-color: #501e70;
      }
    `}

  ${({ highlight }) =>
    highlight &&
    css`
      transform: translate(1px, 1px);
      background-color: #a786bb;
      z-index: 0;

      .tail {
        background-color: #a786bb;
      }
    `}
`;

const CatBody = styled(StyledComponent)`
  width: 70px;
  height: 80px;
  background-color: #1c0526;
  bottom: 0;
  right: 0;
  border-radius: 0 50% 20% 0;
  transform-origin: bottom center;
`;

const CatPaw = styled(StyledComponent)`
  bottom: 0;
  background-color: #1c0526;
  width: 30px;
  height: 11px;
  border-radius: 50px;
  left: 24px;

  &::after {
    height: 60px;
    width: 10px;
    background-color: #3a0956;
    border-radius: 4px;
    left: 0px;
    bottom: 12px;
    box-shadow: 1px 0 #8f65a9;
  }
`;

const StyledCatNeck = styled(StyledComponent)`
  bottom: 80px;
  right: 44px;
  transform: rotate(-13deg);

  .neck {
    bottom: 2px;
    background-color: #1c0526;
    height: 12px;
    width: 15px;
    border-radius: 0 0px 20px 20px;
    z-index: 1;
    transform: rotate(-5deg);
    transform-origin: center center;

    .neck {
      bottom: -28%;
    }
  }
`;

const StyledCatHead = styled(StyledComponent)`
  width: 50px;
  height: 40px;
  background-color: #1c0526;
  border-radius: 18px;
  bottom: 70px;
  left: 18px;
  transform: rotate(3deg);

  .ear {
    width: 24px;
    height: 22px;
    top: -1px;
    left: -1px;
    transform: rotate(45deg);
    animation: ${earLeft} 15s ease infinite;

    .ear-in {
      width: 100%;
      height: 100%;
      background-color: #1c0526;
      transform: skew(35deg);
      border-radius: 5px;
      overflow: hidden;
    }

    &:nth-of-type(2) {
      left: 24px;
      top: -1px;
      transform: rotate(60deg);
      animation: ${earRight} 15s ease infinite;
    }
  }
`;

const CatNeck = (props) => (
  <StyledCatNeck {...props}>
    <div className="neck">
      <div className="neck">
        <div className="neck">
          <div className="neck">
            <div className="neck">
              <div className="neck">
                <div className="neck">
                  <div className="neck" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledCatNeck>
);

const CatTail = (props) => (
  <StyledCatTail {...props}>
    <div className="tail">
      <div className="tail">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail last" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledCatTail>
);

const CatHead = (props) => (
  <StyledCatHead {...props}>
    <div className="ear">
      <div className="ear-in" />
    </div>
    <div className="ear">
      <div className="ear-in" />
    </div>
  </StyledCatHead>
);

const Cat = ({ highlight, ...props }) => (
  <StyledCat highlight={highlight} {...props}>
    <CatHead />
    <CatBody />
    <CatPaw />
    <CatNeck />
    {highlight || (
      <React.Fragment>
        <CatTail highlight />
        <CatTail shadow />
        <CatTail />
      </React.Fragment>
    )}
  </StyledCat>
);

export default Cat;

Cat.propTypes = {
  highlight: PropTypes.bool,
};

Cat.defaultProps = {
  highlight: false,
};
