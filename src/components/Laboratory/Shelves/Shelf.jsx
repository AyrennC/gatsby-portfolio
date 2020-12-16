/** @jsx jsx */
import { Book, StyledBooks } from './Books';
import {
  Bottle,
  StyledBottleLeft,
  StyledBottleRight,
  StyledDrippings,
} from './Bottles';
import { StyledCandle, StyledCandles } from './Candles';
import { StyledCandyBowl } from './CandyBowl';
import { StyledCrystalBall } from './CystalBall';
import { StyledSkull } from './Skull';
import StyledComponent from '../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

export const ShelfBracket = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #3a0956;
`;

export const ShelfHooks = styled.div`
  background-color: #1c0526;
  background: linear-gradient(
    to right,
    #3a0956 0%,
    #3a0956 50%,
    #1c0526 50%,
    #1c0526 100%
  );
  right: 15px;
  height: 20px;
  width: 14px;
  z-index: -1;
  top: 100%;
  border-radius: 0 0 5px 5px;

  &::after {
    width: 100%;
    height: 100%;
    right: 176px;
    background: linear-gradient(
      to right,
      #500d78 0%,
      #500d78 50%,
      #1c0526 50%,
      #1c0526 100%
    );
    border-radius: 0 0 5px 5px;
  }
`;

const ShadowStyle = css`
  background-color: #501e70;
  z-index: 1;

  *,
  *::after,
  *::before,
  * > * {
    background-color: #501e70 !important;
    background: #501e70 !important;
    box-shadow: none;
  }

  ${ShelfBracket} {
    background: linear-gradient(to right, #501e70 0%, #410b61 100%);
    transform: scale(1.03, 1.1) translate(6px, -2px);
  }

  ${StyledBottleLeft},
  ${StyledBottleRight},
  ${StyledCandle},
  ${StyledDrippings},
  ${StyledBooks},
  ${StyledCrystalBall}, ${ShelfHooks}, ${ShelfHooks}::after {
    transform: scale(1.05, 1.1) translateX(10px);
  }

  ${StyledBottleRight} {
    transform: scale(1.05, 1.15) translate(10px, -10px) rotate(-90deg);
  }

  ${StyledCandles},
  ${StyledCandle}:after,
  ${StyledSkull},
  ${Bottle},
  ${StyledBottleLeft},
  ${StyledBottleRight},
  ${StyledBooks},
  ${StyledCrystalBall},
  .flame,
  .ball:after {
    background-color: transparent !important;
  }

  ${Bottle} *,
  ${Bottle} *:after,
  ${StyledBottleLeft} *,
  ${StyledBottleLeft} *:after,
  ${StyledBottleRight} *,
  ${StyledBottleRight} *:after,
  ${StyledSkull} *,
  ${StyledSkull} *:before,
  ${StyledCandyBowl} *,
  ${StyledCrystalBall} *,
  .stand:after,
  .flame-in,
  .flame-in:before {
    background-color: #410b61 !important;
    background: #410b61;
  }

  ${StyledCandyBowl} {
    background-color: #410b61;
  }

  &::before {
    content: none;
  }

  ${StyledCandyBowl},
  ${StyledSkull} {
    transform: scale(1.1, 1.2) translateX(10px);
  }

  ${ShelfHooks},
  ${ShelfHooks}:after {
    transform: scale(1.05, 1.1) translate(6px, -2px);
  }

  ${Book}:after {
    content: none;
  }
`;

export const StyledShelf = styled(StyledComponent)`
  width: 220px;
  height: 20px;
  top: 0;
  right: 0;
  z-index: 2;

  ${({ shadow }) => shadow && ShadowStyle}
`;

const ShelfComponent = styled(StyledComponent)`
  width: 220px;
  height: 20px;
  top: 220px;
  right: 50px;
  z-index: 3;
`;

export const ShelfTop = styled(ShelfComponent)`
  ${StyledShelf} {
    &::after {
      width: 30%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 50px 0 0;
      bottom: 0;
      opacity: 0.1;
      z-index: 3;
    }
    &::before {
      width: 90%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 100px 0 0;
      bottom: 0;
      opacity: 0.1;
      z-index: 2;
    }
  }
`;

export const ShelfMiddle = styled(ShelfComponent)`
  top: 340px;

  ${StyledShelf} {
    &::after {
      width: 15%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 100% 0 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 3;
    }
    &::before {
      width: 70%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 40px 0 0;
      bottom: 0;
      z-index: 2;
      opacity: 0.2;
    }
  }
`;

export const ShelfBottom = styled(ShelfComponent)`
  top: 460px;
  ${StyledShelf} {
    &::after {
      width: 27%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 5px 0 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 3;
    }

    &::before {
      width: 80%;
      height: 100%;
      background-color: #8f65a9;
      border-radius: 0 5px 0 0;
      bottom: 0;
      opacity: 0.2;
      z-index: 2;
    }
  }
`;

const Shelf = ({ shadow, children, ...props }) => (
  <StyledShelf shadow={shadow} {...props}>
    <ShelfHooks />
    <ShelfBracket />
    {children}
  </StyledShelf>
);

export default Shelf;

Shelf.propTypes = {
  shadow: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

Shelf.defaultProps = {
  shadow: false,
  children: [],
};
