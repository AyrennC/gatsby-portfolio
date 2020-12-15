/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const OutletContainer = styled.div`
  width: 25px;
  height: 40px;
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
`;

const OutletFace = styled.div`
  width: 17px;
  height: 12px;
  margin-left: 4px;
  margin-top: 5px;
  position: relative;
  background-color: #d9edee;
  border-radius: 5px;

  &::before {
    content: '';
    position: absolute;
    margin-top: 3px;
    margin-left: 3px;
    width: 6px;
    height: 5px;
    border-left: #87a3a7 2px solid;
    border-right: #87a3a7 2px solid;
  }
`;

const Outlet = (props) => (
  <OutletContainer {...props}>
    <OutletFace />
    <OutletFace />
  </OutletContainer>
);

export default Outlet;
