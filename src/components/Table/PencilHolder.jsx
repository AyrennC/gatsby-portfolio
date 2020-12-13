/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const Pencils = styled.div`
  display: inline-block;
  position: absolute;
  margin-top: 15px;
  margin-left: 21px;
  z-index: 100;
`;

const PencilsContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 64px;
  width: 43px;
  padding-top: 57px;
  z-index: 10;
  top: 55px;
  left: 2px;
`;

const PencilCupTop = styled.div`
  display: block;
  background: #ffeaa7;
  border-radius: 50%;
  box-sizing: border-box;
  border: 6px solid #5f1800;
  box-shadow: inset 0 14px 0 -10px #fdcb6e;
  position: absolute;
  height: 17px;
  width: 38px;
  z-index: 1;
`;

const PencilCupBottom = styled.div`
  display: block;
  border-radius: 50%;
  box-sizing: border-box;
  border-bottom: 6px solid #5f1800;
  position: absolute;
  height: 17px;
  width: 38px;
  z-index: 20;
`;

const PencilCup = styled.div`
  display: inline-block;
  background: #e64545;
  width: 38px;
  height: 50px;
  position: absolute;
  bottom: 2px;
  border-top-left-radius: 50% 34%;
  border-top-right-radius: 50% 34%;
  border-bottom-left-radius: 45% 67%;
  border-bottom-right-radius: 45% 67%;

  &::after {
    content: '';
    background-color: transparent;
    border-radius: 40%;
    border-bottom: 8px solid rgba(172, 91, 20, 0.1);
    position: absolute;
    width: 100%;
    left: 10px;
    right: -2px;
    bottom: -4px;
    z-index: -1;
  }
`;

const Ruler = styled.div`
  display: inline-block;
  width: 80px;
  height: 13px;
  margin-left: 7px;
  background: repeating-linear-gradient(
    to right,
    #3e3f4b,
    #3e3f4b 1px,
    #fae7c7 1px,
    #fae7c7 5px
  );
  transform: rotate(-80deg);
  transform-origin: 0 100%;
`;

const RulerInner = styled.div`
  width: 80px;
  height: 7px;
  background-color: #fae7c7;
`;

const Pencil = styled.div`
  transform-origin: 0;
  margin-top: -60px;
  border-bottom: solid 8px #eabbae;
  position: absolute;
  width: 8px;
  height: 60px;
`;

const PencilLeft = styled(Pencil)`
  background: repeating-linear-gradient(
    to right,
    #f6ba52,
    #f6ba52 2px,
    #f47164 2px,
    #f47164 4px
  );
  margin-left: -15px;
  transform: rotate(-8deg);
`;

const PencilRight = styled(Pencil)`
  background: repeating-linear-gradient(
    to right,
    #84a840,
    #84a840 2px,
    #6787c0 2px,
    #6787c0 4px
  );
  margin-left: -5px;
  transform: rotate(-2deg);
`;

const PencilTip = styled.div`
  position: relative;
  margin-top: -10px;
  width: 0;
  height: 0;
  border-bottom: 10px solid #fae7c7;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
`;

const PencilTipTop = styled(PencilTip)`
  margin-left: -1.5px;
  border-bottom: 4px solid #3e3f4b;
  border-left: 1.5px solid transparent;
  border-right: 1.5px solid transparent;
`;

const PencilHolderContainer = styled.div`
  height: 157px;
  width: 55px;
  padding-left: 3px;
  padding-top: 105px;
  transform: scale(2.5);
`;

const PencilHolder = (props) => (
  <PencilHolderContainer {...props}>
    <PencilCupTop />
    <PencilCupBottom />
    <PencilCup />
    <PencilsContainer>
      <Pencils>
        <Ruler>
          <RulerInner />
        </Ruler>
        <PencilLeft>
          <PencilTip>
            <PencilTipTop />
          </PencilTip>
        </PencilLeft>
        <PencilRight>
          <PencilTip>
            <PencilTipTop />
          </PencilTip>
        </PencilRight>
      </Pencils>
    </PencilsContainer>
  </PencilHolderContainer>
);

export default PencilHolder;
