import styled from '@emotion/styled';

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
  overflow: hidden;
  transform: rotate(20deg);

  @media (orientation: portrait) {
    transform: scale(1.2) rotate(20deg);
  }
`;

export default Notepad;
