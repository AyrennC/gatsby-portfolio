/** @jsx jsx */
import Glitch from './Glitch';
import Resume from '../../data/carney-resume.pdf';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Typist from 'react-typist';
import { jsx } from 'theme-ui';

const cursor = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const Caret = styled.span`
  &::after {
    content: '■';
    animation: ${cursor} 1s infinite;
    animation-timing-function: step-end;
    margin-left: 4px;
    display: inline-block;
    transform: scale(0.8, 1.4);
  }
`;

const Title = styled.h1`
  @media (max-aspect-ratio: 2 / 3) {
    font-size: 1.8em;
  }
`;

const Paragraph = styled.p`
  @media (min-aspect-ratio: 2 / 3) {
    font-size: 1.2rem;
  }
`;

const Terminal = () => (
  <Typist avgTypingDelay={30} stdTypingDelay={25} cursor={{ show: false }}>
    <Title>Hi, I&apos;m Carney!</Title>
    <Paragraph>
      <Caret>
        &gt; just a simple man trying to make my way as a developer.
        <br />
        <br />
        &gt; this website is under construction, but don&apos;t let that stop
        you from taking a look at my{' '}
        <a
          href={Resume}
          sx={{ color: 'accent' }}
          target="_blank"
          rel="noreferrer"
        >
          <Glitch glitch="CLICK TO DOWNLOAD">RESUME</Glitch>
        </a>
        .
      </Caret>
    </Paragraph>
  </Typist>
);

export default Terminal;
