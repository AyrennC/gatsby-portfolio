/** @jsx jsx */
import StyledComponent from '../../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { jsx } from 'theme-ui';

const DynamicBookStyle = ({ theme: { colors } }) => css`
  height: 24px;
  width: 60px;
  background-color: ${colors.grey.offWhite};
  bottom: 2px;
  border-radius: 8px 0 0 8px;

  &::before {
    height: 4px;
    width: 94%;
    bottom: 5px;
    left: 4px;
    background-color: ${colors.grey.offWhiteDark};
  }

  &::after {
    width: 105%;
    height: 100%;
    border: 5px solid #c237bb;
    border-right: 0;
    border-radius: 8px 0 0 8px;
  }

  .details {
    width: 60%;
    height: 1px;
    background-color: rgba(219, 77, 39, 0.3);
    top: 8px;
    left: 4px;
    box-shadow: 20px 4px rgba(219, 77, 39, 0.3);
  }

  &:nth-of-type(2) {
    transform: scaleX(-1);
    bottom: 25px;
    left: 10px;
    z-index: 2;
  }

  &:nth-of-type(2):after {
    border-color: #ee8228;
  }

  &:nth-of-type(3) {
    bottom: 49px;
    left: 5px;
    z-index: 2;
  }

  &:nth-of-type(3):after {
    border-color: ${colors.palette.drippings};
  }
`;

export const Book = styled(StyledComponent)`
  ${DynamicBookStyle}
`;

const DynamicBookUpStyle = ({ theme: { colors } }) => css`
  z-index: 5;
  width: 26px;
  height: 84px;
  left: 73px;
  border-radius: 2px;
  background-color: ${colors.primary.regular};
  bottom: 3px;
  transform: rotate(-15deg);

  &::after {
    width: 50%;
    height: 100%;
    right: 0;
    background-color: rgba(28, 5, 38, 0.5);
  }

  .details {
    width: 100%;
    height: 4px;
    background-color: #ee8228;
    bottom: 12px;
    box-shadow: 0 -10px #ee8228;

    &::after {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      bottom: 45px;
      box-shadow: 5px 5px #ee8228;
      transform: rotate(110deg);
      left: 11px;
    }
  }
`;

export const BookUp = styled(StyledComponent)`
  ${DynamicBookUpStyle}
`;

export const StyledBooks = styled(StyledComponent)`
  bottom: 18px;
  left: 10px;
  height: 60px;
  width: 120px;
`;

const Books = ({ shadow, number, ...props }) => (
  <StyledBooks {...props}>
    {R.times(
      (key) => (
        <Book key={key}>{shadow || <div className="details" />}</Book>
      ),
      number,
    )}
    <BookUp>{shadow || <div className="details" />}</BookUp>
  </StyledBooks>
);

export default Books;

Books.propTypes = {
  shadow: PropTypes.bool,
  number: PropTypes.number,
};

Books.defaultProps = {
  shadow: false,
  number: 3,
};
