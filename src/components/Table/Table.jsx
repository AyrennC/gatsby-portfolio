/** @jsx jsx */
import Bookshelf from './Bookshelf';
import Cup from './Cup';
import Plant from './Plant';
import useWindowSize from '../../hooks/useWindowSize';
import TableTile from '../../images/table-tile.png';
import Monitor from '../Monitor';
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
  background: #e4cc7f url(${TableTile});
  background-size: contain;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  z-index: 1;
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

const ComputerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 120px;
`;

const Computer = styled.div`
  transform-origin: 50% 100%;

  @media (min-width: 820px) {
    @media (max-aspect-ratio: 7 / 8) {
      transform: scale(1.5);
    }

    @media (max-aspect-ratio: 2 / 3) {
      transform: scale(2);
    }
  }

  @media (max-height: 700px) {
    transform: scale(0.9);
    margin-bottom: -10%;
  }

  @media (min-width: 1460px) {
    transform: scale(1.2);
    margin-bottom: -2.5%;
  }
`;

const PlantContainer = styled.div`
  position: absolute;
  top: -277px;
  transform: scale(1.2);

  @media (max-aspect-ratio: 2/3) {
    top: -184px;
    transform: scale(0.8);
  }
`;

const ClutterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-aspect-ratio: 7 / 8) {
    display: none;
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
      <ClutterContainer>
        <Bookshelf />
      </ClutterContainer>
      <On>
        <Notepad />
        <ComputerContainer>
          <Computer>
            <PlantContainer>
              <Plant />
            </PlantContainer>
            <Monitor {...dimension}>{children}</Monitor>
          </Computer>
        </ComputerContainer>
        <Cup />
      </On>
    </TableContainer>
  );
};

export default Table;

Table.propTypes = {
  children: PropTypes.element.isRequired,
};
