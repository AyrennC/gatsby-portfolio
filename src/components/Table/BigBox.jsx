/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const BigBoxContainer = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  margin-left: 80px;
  transform: scale(2);

  &::after {
    content: ' ';
    display: block;
    border-bottom: 10px rgb(172 91 20 / 26%) solid;
    position: absolute;
    left: -5px;
    right: -14px;
    top: 0;
    bottom: -10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 12px;
  }
`;

const BigBoxInner = styled.div`
  position: relative;
  background-color: #fff;
  width: 140px;
  height: 90px;
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    background-color: #d9edee;
    width: 50px;
    height: 90px;
    right: 0;
    margin-right: -50px;
    z-index: 100;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: #fae7c7;
    width: 140px;
    height: 50px;
    top: 0;
    transform: skewX(-25deg);
    transform-origin: top;
    border-radius: 0 0 10px 10px;
    z-index: 160;
  }
`;

const BigBoxShadow = styled.div`
  position: absolute;
  z-index: 150;
  border-top: 70px solid #d9edee;
  border-left: 0 solid transparent;
  border-right: 20px solid transparent;
  height: 0;
  width: 120px;
  border-bottom-right-radius: 45px;
`;

const BigBoxHole = styled.div`
  position: absolute;
  z-index: 150;
  background-color: #443f4b;
  width: 25px;
  height: 12px;
  margin-left: 155px;
  margin-top: 15px;
  border-radius: 5px;
`;

const Folder = styled.div`
  position: absolute;
  background-color: #e4aa9c;
  width: 100px;
  height: 55px;
  z-index: 90;
  margin-top: -110px;
  margin-left: 25px;
  transform: rotate(-2deg);
  transform-origin: bottom left;

  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 7px;
    margin-top: -15px;
    left: 0;
    border-bottom: 10px solid #e4aa9c;
    border-left: 0 solid transparent;
    border-right: 5px solid transparent;
  }
`;

const FolderPaperOuter = styled.div`
  width: 88px;
  height: 85px;
  position: absolute;
  background-color: #fff;
  margin-left: 42px;
  top: -10px;
  transform: rotate(5deg);
  z-index: 81;
`;

const FolderPaperInner = styled.div`
  width: 60px;
  height: 85px;
  position: absolute;
  background-color: #d9edee;
  margin-left: 65px;
  transform: rotate(-90deg);
  transform-origin: left;
  z-index: 80;
`;

const Paper = styled.div`
  display: flex;
  justify-content: center;
`;

const Skills = styled.p`
  min-width: 34px;
  font-size: 8px;
  text-align: left;
  margin-top: 7px;
  color: #4f395c;
  line-height: 8px;
`;

const Remarks = styled.p`
  font-size: 9px;
  text-align: center;
  margin-top: 5px;
  color: #000;
  line-height: 9px;
`;

const BigBox = (props) => (
  <BigBoxContainer {...props}>
    <BigBoxInner>
      <BigBoxShadow />
      <BigBoxHole />
    </BigBoxInner>
    <Folder>
      <FolderPaperInner />
      <FolderPaperOuter>
        <Paper>
          <Remarks>Australian National University</Remarks>
          <Skills>
            - NodeJS
            <br />- Golang
            <br />- Python
          </Skills>
        </Paper>
      </FolderPaperOuter>
    </Folder>
  </BigBoxContainer>
);

export default BigBox;
