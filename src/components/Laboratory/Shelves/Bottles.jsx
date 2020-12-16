/** @jsx jsx */
import StyledComponent from '../StyledComponent';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

export const Bottle = styled(StyledComponent)`
  transform-origin: bottom center;

  .bowl {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #e6eff2;
    overflow: hidden;
  }

  .bowl:after {
    background-color: #a8dcea;
  }

  .bowl-in {
    width: 88%;
    height: 88%;
    left: 6%;
    bottom: 6%;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
  }

  .liquid {
    width: 100%;
    height: 70%;
    bottom: 0;
    background-color: #500d78;
  }

  .liquid:after {
    background-color: #3a0956;
  }

  .liquid .bottle-bubble {
    border-radius: 20px;
    width: 5px;
    height: 5px;
    top: 14px;
    left: 2px;
    background-color: #6c11a1;
    z-index: 2;
  }

  .liquid .bottle-bubble:nth-of-type(2) {
    top: 3px;
    left: 10px;
    width: 7px;
    height: 7px;
  }

  .liquid .bottle-bubble:nth-of-type(3) {
    top: 6px;
    left: 25px;
    width: 5px;
    height: 5px;
  }

  .liquid .bottle-bubble:nth-of-type(4) {
    top: 17px;
    left: 30px;
    width: 5px;
    height: 5px;
  }

  .liquid .bottle-bubble:nth-of-type(5) {
    top: -4px;
    left: 30px;
    width: 8px;
    height: 8px;
    background-color: #3a0956;
  }

  .bottle-reflection {
    opacity: 0.5;
    border-radius: 0 0 0 50px;
    border: 6px solid #feffff;
    border-top: 0;
    border-right: 0;
    width: 18px;
    height: 18px;
    bottom: 5px;
    left: 5px;
    z-index: 10;

    &::after {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #feffff;
      bottom: 10px;
      left: -6px;
      box-shadow: 15px 16px #feffff;
    }
  }
`;

export const StyledBottleLeft = styled(Bottle)`
  bottom: 20px;
  left: 35%;
  width: 50px;
  height: 50px;
  transform: scale(0.8);

  *::after {
    width: 50%;
    height: 100%;
    right: 0;
  }

  .bottle-neck {
    width: 12px;
    height: 20px;
    top: -16px;
    left: 19px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
    }

    &::before {
      background-color: #feffff;
      height: 80%;
      width: 30%;
      left: 12%;
      border-radius: 3px;
      z-index: 2;
      opacity: 0.5;
    }
  }

  .bottle-top {
    width: 24px;
    height: 7px;
    top: -23px;
    left: 13px;
    border-radius: 5px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const StyledBottleRight = styled(Bottle)`
  transform-origin: bottom right;
  bottom: 70px;
  left: 73%;
  width: 50px;
  height: 50px;
  transform: rotate(-90deg);

  *:after {
    width: 50%;
    height: 100%;
    right: 0;
  }
  .bowl {
    width: 80%;
    height: 80%;
    left: 0;
    border-radius: 5px;
    background-color: #e6eff2;
    overflow: hidden;

    &::after {
      background-color: #a8dcea;
      width: 20%;
    }
    &::before {
      z-index: 3;
      width: 20px;
      height: 8px;
      border-radius: 10px;
      background-color: #feffff;
      opacity: 0.4;
      left: 5px;
      top: 6px;
    }
    .bowl-in {
      border-radius: 5px;
    }
    .liquid {
      height: 100%;
      width: 38%;
      bottom: 0;
      left: 0;
      background-color: #3ebcbc;
      z-index: 2;
      &::after {
        background-color: #3ebcbc;
      }
    }
  }

  .bottle-neck {
    width: 10px;
    height: 10px;
    top: -10px;
    left: 15px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
    }
  }

  .bottle-top {
    width: 14px;
    height: 7px;
    top: -16px;
    left: 13px;
    border-radius: 5px;
    background-color: #e6eff2;

    &::after {
      background-color: #a8dcea;
      border-radius: 0 5px 5px 0;
    }
  }
`;

const drip = keyframes`
  20%, 100% {
    transform: translateY(60px);
  }
`;

export const StyledDrippings = styled(StyledComponent)`
  width: 30px;
  height: 12px;
  background-color: #3ebcbc;
  left: 58%;
  border-radius: 3px;
  top: -1px;
  z-index: 15;

  &::after {
    width: 8px;
    height: 18px;
    border-radius: 3px;
    background-color: #3ebcbc;
    top: 8px;
    right: 0;
  }

  .drip {
    width: 8px;
    height: 12px;
    border-radius: 3px;
    background-color: #3ebcbc;
    top: 10px;
    right: 0;
    animation: ${drip} 5s ease-in infinite;
  }
`;

export const BottleLeft = ({ shadow, ...props }) => (
  <StyledBottleLeft {...props}>
    <div className="bowl">
      {shadow || (
        <div className="bowl-in">
          <div className="liquid">
            <div className="bottle-bubble" />
            <div className="bottle-bubble" />
            <div className="bottle-bubble" />
            <div className="bottle-bubble" />
            <div className="bottle-bubble" />
          </div>
          <div className="bottle-reflection" />
        </div>
      )}
    </div>
    <div className="bottle-neck" />
    <div className="bottle-top" />
  </StyledBottleLeft>
);

BottleLeft.propTypes = {
  shadow: PropTypes.bool,
};

BottleLeft.defaultProps = {
  shadow: false,
};

export const BottleRight = ({ shadow, ...props }) => (
  <StyledBottleRight {...props}>
    <div className="bowl">
      {shadow || (
        <div className="bowl-in">
          <div className="liquid" />
        </div>
      )}
    </div>
    <div className="bottle-neck" />
    <div className="bottle-top" />
  </StyledBottleRight>
);

BottleRight.propTypes = {
  shadow: PropTypes.bool,
};

BottleRight.defaultProps = {
  shadow: false,
};

export const Drippings = (props) => (
  <StyledDrippings {...props}>
    <div className="drip" />
  </StyledDrippings>
);
