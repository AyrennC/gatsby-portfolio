/** @jsx jsx */
import StyledComponent from './StyledComponent';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

export const StyledCrystalBall = styled(StyledComponent)`
  left: 10px;
  bottom: 20px;
  width: 60px;
  height: 60px;

  .stand {
    z-index: 2;
    width: 50px;
    left: 5px;
    height: 10px;
    border-radius: 3px;
    background-color: #e6eff2;
    background: linear-gradient(
      to right,
      #e6eff2 0%,
      #e6eff2 50%,
      #a8dcea 50%,
      #a8dcea 100%
    );
    bottom: 0;

    &::after {
      width: 40px;
      left: 5px;
      height: 7px;
      border-radius: 2px;
      bottom: 9px;
      background: linear-gradient(
        to right,
        #a8dcea 0%,
        #a8dcea 50%,
        #92bfcc 50%,
        #92bfcc 100%
      );
    }
  }

  .ball {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    left: 2px;
    top: -6px;
    background-color: #f495f0;
    overflow: hidden;

    &::after {
      width: 50%;
      height: 100%;
      right: 0;
      background-color: #f175eb;
    }

    .ball-highlight {
      opacity: 0.5;
      border-radius: 0 0 0 50px;
      border: 6px solid #feffff;
      border-top: 0;
      border-right: 0;
      width: 18px;
      height: 18px;
      bottom: 10px;
      left: 7px;
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
  }
`;

const CrystalBall = ({ shadow, ...props }) => (
  <StyledCrystalBall {...props}>
    <div className="stand" />
    <div className="ball">{shadow || <div className="ball-highlight" />}</div>
  </StyledCrystalBall>
);

export default CrystalBall;

CrystalBall.propTypes = {
  shadow: PropTypes.bool,
};

CrystalBall.defaultProps = {
  shadow: false,
};
