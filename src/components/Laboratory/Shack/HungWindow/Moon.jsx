/** @jsx jsx */
import StyledComponent from '../../StyledComponent';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const DynamicMoonStyle = ({ theme: { colors } }) => css`
  width: 50px;
  height: 50px;
  top: 10%;
  right: 15%;
  border-radius: 50%;
  z-index: 2;
  background-color: ${colors.grey.white};
  box-shadow: 0 0 10px ${colors.grey.white}, 0 0 0 25px rgba(143, 101, 169, 0.3),
    0 0 0 50px rgba(143, 101, 169, 0.2), 0 0 0 75px rgba(143, 101, 169, 0.1);
`;

const StyledMoon = styled(StyledComponent)`
  ${DynamicMoonStyle}
`;

const Craters = styled(StyledComponent)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(20, 1, 30, 0.15);
  left: 10px;
  top: 10px;

  &::after {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(20, 1, 30, 0.15);
    left: 15px;
    top: 10px;
  }

  &::before {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: rgba(20, 1, 30, 0.15);
    left: 0;
    top: 20px;
  }
`;

const Moon = (props) => (
  <StyledMoon {...props}>
    <Craters />
  </StyledMoon>
);

export default Moon;
