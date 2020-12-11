/** @jsx jsx */
import Monitor from './Monitor';
import useWindowSize from '../hooks/useWindowSize';
import TableTile from '../images/table-tile.png';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { jsx } from 'theme-ui';

const On = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 768px;
  position: absolute;
  margin-left: -15px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const TableContainer = styled.div`
  height: 36vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #8bc34a url(${TableTile});
  background-size: contain;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const Notepad = styled.div`
  height: 193px;
  width: 136px;
  background: linear-gradient(
    to bottom,
    #f17777 0px,
    #f17777 34px,
    #fff 34px,
    #fff 62px,
    #cee8ef 62px,
    #cee8ef 66px,
    #fffefe 66px,
    #fff 90px,
    #cee8ef 90px,
    #cee8ef 94px,
    #fff 94px,
    #fff 118px,
    #cee8ef 118px,
    #cee8ef 122px,
    #fff 122px,
    #fff 146px,
    #cee8ef 146px,
    #cee8ef 150px,
    #fff 150px,
    #fff 176px,
    #cee8ef 176px,
    #cee8ef 193px
  );
  box-shadow: -10px 0 0 0 rgba(172, 91, 20, 0.2);
  position: absolute;
  overflow: hidden;
  bottom: 80px;
  left: auto;
  right: 0;
  transform: rotate(20deg);

  @media (orientation: portrait) {
    transform: scale(1.2) rotate(20deg);
  }
`;

const Cup = styled.div`
  z-index: 10;
  height: 155px;
  width: 131px;
  position: absolute;
  bottom: 74px;
  left: 40px;
  background: #1d80c2;
  border-top-left-radius: 50% 34%;
  border-top-right-radius: 50% 34%;
  border-bottom-left-radius: 45% 67%;
  border-bottom-right-radius: 45% 67%;

  @media (max-aspect-ratio: 7 / 8) {
    transform: scale(1.2);
    bottom: 94px;
    left: 100px;
  }
`;

const CupShadow = styled.div`
  height: 56px;
  width: 100px;
  background: rgba(172, 91, 20, 0.2);
  border-bottom-left-radius: 56px;
  border-bottom-right-radius: 56px;
  position: absolute;
  bottom: 70px;
  left: 32px;

  @media (orientation: portrait) {
    transform: scale(1.2);
  }

  @media (max-aspect-ratio: 7 / 8) {
    bottom: 90px;
    left: 92px;
  }
`;

const Top = styled.div`
  height: 97px;
  width: 131px;
  background: #8f6739;
  border-radius: 50%;
  box-sizing: border-box;
  border: 12px solid #46a8eb;
  box-shadow: inset 0 50px 0 -20px #6b4b28;
  position: absolute;
`;

const Handle = styled.div`
  height: 66px;
  width: 60px;
  background: transparent;
  box-sizing: border-box;
  border: 16px solid #1d80c2;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 80% 60%;
  position: absolute;
  top: 60px;
  left: -31px;
`;

const Teatag = styled.div`
  height: 36px;
  width: 32px;
  position: absolute;
  top: 103px;
  left: -20px;
  background: #c1ebc3;
  box-shadow: inset 0 -6px 0 0 #45ac71;

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    border-style: solid;
    border-width: 0 16px 8px 16px;
    border-color: transparent transparent #c1ebc3 transparent;
  }
`;

const TeabagCord = styled.div`
  height: 57px;
  width: 60px;
  position: absolute;
  top: 57px;
  left: -7px;
  box-sizing: border-box;
  border: 6px solid #fff5e6;
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
  clip: rect(0px 44px 41px 0px);
`;

const TeabagCordBeginningAndEnd = styled.div`
  position: absolute;
  top: 57px;
  left: -7px;

  &::before,
  &::after {
    content: '';
    background: #fff5e6;
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    top: 3.1px;
    left: 40px;
    height: 7.1px;
    width: 6.6px;
    clip: rect(0px 6.6px 7px 3.8px);
  }
  &::after {
    top: 38px;
    left: 0;
    height: 6px;
    width: 6px;
  }
`;

const ComputerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 120px;
`;

const Computer = styled.div`
  transform-origin: 50% 100%;

  @media (min-width: 780px) {
    @media (max-aspect-ratio: 7 / 8) {
      transform: scale(1.5);
    }

    @media (max-aspect-ratio: 2 / 3) {
      transform: scale(2);
    }
  }
`;

const Table = ({ children }) => {
  const { width, height } = useWindowSize();
  const dimension = useMemo(() => {
    if (width / height > 2 / 3) {
      return {
        width: 480,
        height: 270,
        widthOffset: 3.2,
        heightOffset: 2,
      };
    }
    return {};
  }, [width, height]);

  return (
    <TableContainer>
      <On>
        <Notepad />
        <ComputerContainer>
          <Computer>
            <Monitor {...dimension}>{children}</Monitor>
          </Computer>
        </ComputerContainer>
        <CupShadow />
        <Cup>
          <Teatag />
          <Handle />
          <Top />
          <TeabagCord />
          <TeabagCordBeginningAndEnd />
        </Cup>
      </On>
    </TableContainer>
  );
};

export default Table;

Table.propTypes = {
  children: PropTypes.element.isRequired,
};
