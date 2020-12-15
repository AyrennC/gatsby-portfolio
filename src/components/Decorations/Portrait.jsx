/** @jsx jsx */
import PortraitBackground from '../../images/portrait-background.png';
import PortraitImage from '../../images/potrait-64.png';
import Haskell from '../Icons/Haskell';
import styled from '@emotion/styled';
import { Image } from '@theme-ui/components';
import { jsx } from 'theme-ui';

const PortraitContainer = styled.div`
  display: inline-block;
  background: #1d0f13;
  padding: 12px 12px 4px 12px;
  pointer-events: none;
`;

const Frame = styled.div`
  display: inline-block;
  background-image: url(${PortraitBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-left: 20px;

  img {
    width: 130px;
    margin-bottom: -3px;

    @media (min-width: 880px) and (orientation: portrait) {
      width: 270px;
    }
  }
`;

const Description = styled.div`
  text-align: center;
  color: #eedd82;
  margin: 8px 0;

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  @media (min-width: 880px) and (orientation: portrait) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const Logo = styled.span`
  svg {
    margin-top: 2px;
    margin-bottom: -3px;
  }
`;

const Portrait = (props) => (
  <PortraitContainer {...props}>
    <Frame>
      <Image src={PortraitImage} />
    </Frame>
    <Description>
      <h1>SOFTWARE ENGINEER</h1>
      <p>
        Gamer, Programmer and
        <br />
        FP -
        <Logo>
          <Haskell color="#eeda7f" height="1em" />
        </Logo>{' '}
        Enthusiast.
      </p>
    </Description>
  </PortraitContainer>
);

export default Portrait;
