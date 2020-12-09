/** @jsx jsx */
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const MacintoshContainer = styled.div`
  display: block;
  width: ${({ width }) => width}px;
  height: 475px;
  margin: 125px auto;
  position: relative;
  box-shadow: 0 80px 60px -60px rgba(0, 0, 0, 0.4);
  transform: scale(1.5);
`;

const Monitor = styled.div`
  z-index: 2;
  display: block;
  width: 100%;
  height: 410px;
  border-radius: 15px;
  background-color: #dddbc2;
  position: absolute;
  background-image: lineear-gradient(#dddbc2, #dfdac4);
  background-image: ${({ widthOffset }) => `conic-gradient(
    #dddbc2 0 ${10.5 + widthOffset}%,
    #ececd5 ${11 + widthOffset}% ${11.5 + widthOffset}%,
    #cecdaf ${12 + widthOffset}% ${38 - widthOffset}%,
    #c8c4a7 ${39 - widthOffset}% ${61.5 - widthOffset}%,
    #c7c3a6 ${62 - widthOffset}% ${88 - widthOffset}%,
    #dfdac4 ${88.5 - widthOffset}% ${89 - widthOffset}%,
    #dddbc2 ${89.25 - widthOffset}%
  );`} /* Not supported everywhere :( */
  box-shadow: 0 60px 20px -20px rgba(142, 137, 97, 0.5);
`;

const MonitorInner = styled.div`
  display: block;
  height: 360px;
  background-image: linear-gradient(#cac6a9, #cfceb0);
  margin: 0 10px;
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  border-radius: 5px;
`;

const ScreenCutout = styled.div`
  display: block;
  height: ${({ height }) => height}px;
  background-color: #dddbc2;
  margin: 0 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  border-radius: 5px;
  background-image: linear-gradient(#938f6a, #e0dfc3);
  background-image: ${({ widthOffset, heightOffset }) => `conic-gradient(
    #938f6a ${12.5 + widthOffset}%,
    #b5b293 ${15.5 + widthOffset}% ${33 - widthOffset}%,
    #e0dfc3 ${34 - widthOffset + heightOffset}%
      ${65.5 + widthOffset - heightOffset}%,
    #c2c1a2 ${66.5 + widthOffset}% ${83.5 - widthOffset}%,
    #938f6a ${86.5 + widthOffset}%
  );`};
`;

const Screen = styled.div`
  display: block;
  height: ${({ height }) => height - 30}px;
  background-color: #4f5555;
  background-image: radial-gradient(#525b5a, #50585a);
  margin: 0 10px;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  border-radius: 20px;
  box-shadow: 0 0 20px 10px #2b3030 inset;
`;

const Logo = styled.div`
  display: block;
  width: 22px;
  height: 22px;
  background-image: radial-gradient(#c9c6b5, #cbc9ba);
  border-radius: 2px;
  position: absolute;
  left: 22px;
  bottom: 22px;
  box-shadow: 0 0 2px 0px #979181 inset;

  p {
    text-align: center;
    margin-top: -0.5px;
  }
`;

const Opening = styled.div`
  display: block;
  width: 155px;
  height: 15px;
  background-image: linear-gradient(#bebb9c, #cac8a7 74.5% 75.5%);
  background-image: conic-gradient(
    #bebb9c 0% 23.5%,
    #c7c2a2 24.5% 25%,
    #dcd8bd 26% 73.5%,
    #cac8a7 74.5% 75.5%,
    #bebb9c 76.5%
  );
  position: absolute;
  bottom: 20px;
  right: 21px;
  border-radius: 4px;
`;

const OpeningInner = styled.div`
  display: block;
  width: 126px;
  height: 8px;
  background-color: #181914;
  border-radius: 2px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 3.5px;
`;

const Foot = styled.div`
  display: block;
  width: 100%;
  height: 85px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  border-radius: 7px;
  background-image: linear-gradient(#bbb497, #c1be9f);
  box-shadow: 14px 0 3px -7px #cccab1 inset, -14px 0 3px -7px #cecdb1 inset,
    0 32px 3px -7px #c1be9f inset, 0 -6px 3px -4px #aeaa87 inset;
`;

const Insert = styled.div`
  display: inline;
  width: 16px;
  height: 16px;
  background-color: #c3bea0;
  position: absolute;
  bottom: 20px;
  left: 35px;
  border-radius: 2px;
  box-shadow: 0 0 2px #c9c3a3 inset, 0 0px 2px 1px #bcb694;
`;

const CableContainer = styled.div`
  display: block;
  width: 60px;
  height: 30px;
  background-color: #c3bea0;
  position: absolute;
  right: 30px;
  bottom: 15px;
  border-radius: 3px;
  box-shadow: 0 2px 1px -1px #d0cbae inset, 4px 0 1px -1px #bab492 inset,
    -5px 0 2px -2px #a8a281 inset, 0 -4px 2px -3px #ada88b inset;
`;

const CableHole = styled.div`
  display: block;
  width: 18px;
  height: 20px;
  background-color: #848580;
  position: absolute;
  top: 5px;
  right: 7px;
  border-radius: 3px;
  box-shadow: 0 -4px 0.5px -0.5px rgba(25, 25, 25, 0.2) inset,
    -2px 0 0.5px -0.5px rgba(25, 25, 25, 0.2) inset,
    2px 0 0.5px -0.5px rgba(25, 25, 25, 0.2) inset;
  background-image: linear-gradient(
      #848580 20%,
      transparent 20% 80%,
      #848580 80%
    ),
    linear-gradient(90deg, transparent 30%, #181914 30% 70%, transparent 70%);
`;

const Macintosh = ({ width, height, widthOffset, heightOffset, children }) => (
  <MacintoshContainer width={width}>
    <Monitor widthOffset={widthOffset}>
      <MonitorInner>
        <ScreenCutout
          height={height}
          widthOffset={widthOffset}
          heightOffset={heightOffset}
        >
          <Screen height={height}>{children}</Screen>
        </ScreenCutout>
        <Logo>
          <p>🍭️‍</p>
        </Logo>
        <Opening>
          <OpeningInner />
        </Opening>
      </MonitorInner>
    </Monitor>
    <Foot>
      <Insert />
      <CableContainer>
        <CableHole />
      </CableContainer>
    </Foot>
  </MacintoshContainer>
);

export default Macintosh;

Macintosh.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  widthOffset: PropTypes.number,
  heightOffset: PropTypes.number,
};

Macintosh.defaultProps = {
  width: 560,
  height: 270,
  widthOffset: 4,
  heightOffset: 2,
};
