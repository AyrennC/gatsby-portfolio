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
import StyledComponent from '../../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const DynamicShelfBracketStyle = ({ theme: { colors } }) => css`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: ${colors.primary.dark};
`;

export const ShelfBracket = styled.div`
  ${DynamicShelfBracketStyle}
`;

const DynamicShelfHooksStyle = ({ theme: { colors } }) => css`
  background-color: ${colors.primary.shadow};
  background: linear-gradient(
    to right,
    ${colors.primary.dark} 0%,
    ${colors.primary.dark} 50%,
    ${colors.primary.shadow} 50%,
    ${colors.primary.shadow} 100%
  );

  &::after {
    background: linear-gradient(
      to right,
      ${colors.primary.regular} 0%,
      ${colors.primary.regular} 50%,
      ${colors.primary.shadow} 50%,
      ${colors.primary.shadow} 100%
    );
  }
`;

export const ShelfHooks = styled.div`
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
    border-radius: 0 0 5px 5px;
  }

  ${DynamicShelfHooksStyle};
`;

const DynamicShadowStyle = ({ theme: { colors } }) => css`
  background-color: ${colors.shadow.medium};
  z-index: 1;

  *,
  *::after,
  *::before,
  * > * {
    background-color: ${colors.shadow.medium} !important;
    background: ${colors.shadow.medium} !important;
    box-shadow: none;
  }

  ${ShelfBracket} {
    background: linear-gradient(
      to right,
      ${colors.shadow.medium} 0%,
      ${colors.shadow.dark} 100%
    );
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
    background-color: ${colors.shadow.dark} !important;
    background: ${colors.shadow.dark};
  }

  ${StyledCandyBowl} {
    background-color: ${colors.shadow.dark};
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

  ${({ shadow }) => shadow && DynamicShadowStyle}
`;

const ShelfComponent = styled(StyledComponent)`
  width: 220px;
  height: 20px;
  top: 220px;
  right: 50px;
  z-index: 3;
`;

const DynamicShelfTopStyle = ({ theme: { colors } }) => css`
  ${StyledShelf} {
    &::after {
      width: 30%;
      height: 100%;
      background-color: ${colors.primary.light};
      border-radius: 0 50px 0 0;
      bottom: 0;
      opacity: 0.1;
      z-index: 3;
    }
    &::before {
      width: 90%;
      height: 100%;
      background-color: ${colors.primary.light};
      border-radius: 0 100px 0 0;
      bottom: 0;
      opacity: 0.1;
      z-index: 2;
    }
  }
`;

export const ShelfTop = styled(ShelfComponent)`
  ${DynamicShelfTopStyle}
`;

const DynamicShelfMiddleStyle = ({ theme: { colors } }) => css`
  top: 340px;

  ${StyledShelf} {
    &::after {
      width: 15%;
      height: 100%;
      background-color: ${colors.primary.light};
      border-radius: 0 100% 0 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 3;
    }
    &::before {
      width: 70%;
      height: 100%;
      background-color: ${colors.primary.light};
      border-radius: 0 40px 0 0;
      bottom: 0;
      z-index: 2;
      opacity: 0.2;
    }
  }
`;

export const ShelfMiddle = styled(ShelfComponent)`
  ${DynamicShelfMiddleStyle}
`;

const DynamicShelfBottomStyle = ({ theme: { colors } }) => css`
  top: 460px;
  ${StyledShelf} {
    &::after {
      width: 27%;
      height: 100%;
      background-color: ${colors.primary.light};
      border-radius: 0 5px 0 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 3;
    }

    &::before {
      width: 80%;
      height: 100%;
      background-color: ${colors.primary.light};
      border-radius: 0 5px 0 0;
      bottom: 0;
      opacity: 0.2;
      z-index: 2;
    }
  }
`;

export const ShelfBottom = styled(ShelfComponent)`
  ${DynamicShelfBottomStyle}
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
