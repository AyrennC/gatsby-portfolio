/** @jsx jsx */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const PictureContainer = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  position: relative;
`;

const Picture = styled.div`
  border: 10px solid #3a2d27;
  border-radius: 4px;
  position: relative;
`;

const pictureRight = keyframes`
  20% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  70% {
    transform: rotate(1deg);
  }
  80% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const PictureRight = styled(Picture)`
  background-color: #f7f5f7;
  background-size: 60px 80px;
  margin-left: 160px;
  width: 120px;
  height: 150px;

  &:hover {
    animation: ${pictureRight} 1s linear forwards;
    transform-origin: top;
  }
`;

const pictureLeft = keyframes`
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const PictureLeft = styled(Picture)`
  background-size: 60px 80px;
  background-color: #d89a8f;
  margin-top: -70px;
  width: 120px;
  height: 150px;

  &:hover {
    animation: ${pictureLeft} 0.5s linear forwards;
  }
`;

const pictureBottom = keyframes`
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const PictureBottom = styled(Picture)`
  background-size: 80px 60px;
  background-color: #b0bbb4;
  width: 150px;
  height: 120px;
  margin-top: -40px;
  margin-left: 160px;

  &:hover {
    animation: ${pictureBottom} 0.5s linear forwards;
    transform-origin: top left;
  }
`;

const Pictures = (props) => (
  <PictureContainer {...props}>
    <PictureRight />
    <PictureLeft />
    <PictureBottom />
  </PictureContainer>
);

export default Pictures;
