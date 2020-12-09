/** @jsx jsx */
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import styled from '@emotion/styled';
import { Image } from '@theme-ui/components';
import { jsx } from 'theme-ui';

const Container = styled.div`
  a {
    margin: 2px;
    img {
      width: 36px;
    }
  }
`;

const Socials = () => (
  <Container>
    <a
      href="https://www.linkedin.com/in/carney-cheng/"
      target="_blank"
      rel="noreferrer"
    >
      <Image src={Linkedin} alt="linkedin" />
    </a>
    <a href="https://github.com/CarneyC" target="_blank" rel="noreferrer">
      <Image src={Github} alt="github" />
    </a>
  </Container>
);

export default Socials;
