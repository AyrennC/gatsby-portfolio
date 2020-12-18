/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx */
import theme from './Theme';
import BlueStrike from '../../images/blue-strike.svg';
import RedStrike from '../../images/red-strike.svg';
import TitleOrnament from '../../images/title-ornament.svg';
import { css, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

const BaseStyle = css`
  box-sizing: border-box;

  *,
  &::before,
  &::after {
    box-sizing: border-box;
  }
`;

const DynamicTomeContainerStyle = ({ theme: { fonts } }) => css`
  ${BaseStyle};

  color: #e5e5e5;
  font-size: 16px;
  line-height: 1.25;
  font-family: ${fonts.body};
  margin-left: auto;
  margin-right: auto;
  max-width: 80em;
  z-index: 0;
`;

const TomeContainer = styled.div`
  ${DynamicTomeContainerStyle}
`;

const StyledTome = styled.div`
  ${BaseStyle};

  float: left;
  padding: 1em;
  width: 100%;
`;

const DynamicSectionStyle = ({ theme: { fonts } }) => css`
  ${BaseStyle};

  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.5) 0 1em 3em;
  color: #000;
  padding: 2em;
  position: relative;

  * {
    position: relative;
  }

  *::selection {
    background: rgba(222, 255, 0, 0.75);
  }

  header {
    padding-bottom: 1em;
  }

  header *,
  footer * {
    font-weight: 700;
    font-size: 1em;
    line-height: 1.25;
    font-family: ${fonts.heading};
    letter-spacing: 0.125em;
    margin: 0;
  }

  header * {
    font-size: 0.75em;
    text-transform: uppercase;
  }

  footer {
    padding-top: 1em;
  }

  hr {
    background-color: #000;
    border: 0;
    height: 2px;
    margin: 1em 0;
  }

  dl {
    border: solid 0 #ccc;
    border-width: 0.0625em 0;
    break-inside: avoid-column;
    margin: 1em auto;
    padding: 1em 0;
  }

  @media only screen and (min-width: 50em) {
     {
      margin: 1em;
      position: relative;
    }

    &::before {
      background-color: #8b4513;
      border-radius: 0.25em;
      bottom: -1em;
      content: '';
      left: -1em;
      position: absolute;
      right: -1em;
      top: -1em;
      z-index: -1;
    }

    &::after {
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.2) 46%,
        rgba(0, 0, 0, 0.5) 49%,
        rgba(0, 0, 0, 0.6) 50%,
        rgba(0, 0, 0, 0.5) 51%,
        rgba(0, 0, 0, 0.2) 52%,
        transparent 100%
      );
      bottom: -1em;
      content: '';
      left: 50%;
      position: absolute;
      top: -1em;
      transform: translate(-50%, 0);
      width: 4em;
      z-index: 1;
    }

    & > * {
      column-count: 2;
      column-gap: 6em;
      position: relative;
      z-index: 1;
    }

    /* Header/Footer */
    header:before,
    header:after,
    footer:before,
    footer:after {
      background: #fff;
      border-radius: 25%;
      content: '';
      height: 2em;
      position: absolute;
      z-index: -1;
      width: calc(50% + 2em);
    }

    header:before,
    footer:before,
    footer:after {
      border-top-left-radius: 0;
    }

    header:after,
    footer:before,
    footer:after {
      border-top-right-radius: 0;
    }

    header:before,
    header:after,
    footer:after {
      border-bottom-right-radius: 0;
    }

    header:before,
    header:after,
    footer:before {
      border-bottom-left-radius: 0;
    }

    header:before,
    header:after {
      top: -2.65em;
    }

    header:before,
    footer:before {
      right: 50%;
    }

    header:before {
      transform: rotate(-2deg);
    }

    header:after,
    footer:after {
      left: 50%;
    }

    header:after {
      transform: rotate(2deg);
    }

    footer:before,
    footer:after {
      bottom: -2.65em;
    }

    footer:before {
      transform: rotate(2deg);
    }

    footer:after {
      transform: rotate(-2deg);
    }

    header > *:last-child,
    footer > *:last-child {
      text-align: right;
    }
  }
`;

const Section = styled.section`
  ${DynamicSectionStyle}
`;

const DynamicChapterTitleStyle = ({ theme: { fonts } }) => css`
  ${BaseStyle};

  background: url(${TitleOrnament}) bottom center no-repeat;
  background-size: 0.5em 0.5em;
  font-weight: 700;
  font-size: 7vw;
  line-height: 1.25;
  font-family: ${fonts.heading};
  letter-spacing: 0.125em;
  margin: 0 0 1em 0;
  padding: 1em 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  &::before,
  &::after {
    border: solid 0 #000;
    border-width: 0.05em 0;
    bottom: calc((0.125em / 2) * 3);
    content: '';
    height: 0.15em;
    position: absolute;
    width: calc(50% - (1em / 2));
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  & + p:first-of-type {
    text-indent: 0;
  }

  & + p:first-of-type:first-letter {
    float: left;
    font-weight: 700;
    font-size: 3em;
    line-height: 0.65;
    font-family: ${fonts.heading};
    padding: 0.15em 0.05em 0 0;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 50em) {
    font-size: 3em;

    &::before,
    &::after {
      height: 0.125em;
    }
  }
`;

const ChapterTitle = styled.h2`
  ${DynamicChapterTitleStyle}
`;

const DynamicArticleStyle = () => css`
  ${BaseStyle};

  line-height: 1.5;

  *:not(${ChapterTitle}):not(hr):not(dl) {
    margin: 0 auto;
    max-width: 28.125em;
  }

  p {
    text-indent: 3em;
  }

  & > ul,
  & > ol {
    padding-left: 3em;
  }

  & > ul ul {
    padding-left: 1em;
  }
`;

const Article = styled.article`
  ${DynamicArticleStyle}
`;

export const ArticleLink = styled(Link)`
  ${BaseStyle};

  background: url(${BlueStrike}) bottom repeat-x;
  background-size: auto 0.25em;
  color: inherit;
  text-decoration: none;

  @media only screen and (min-width: 50em) {
    p {
      text-indent: 3em;
    }

    & > ul,
    & > ol {
      padding-left: 4em;
    }
  }
`;

const DynamicStrikeStyle = () => css`
  ${BaseStyle};

  background: url(${RedStrike}) center repeat-x;
  background-size: auto 0.5em;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

const Strike = styled.s`
  ${DynamicStrikeStyle}
`;

const DynamicSuperscriptStyle = ({ theme: { fonts } }) => css`
  ${BaseStyle};

  color: #cc0000;
  font-family: ${fonts.subtitle};
  left: 0;
  margin-top: -1em !important;
  max-width: 100% !important;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const Super = styled.sup`
  ${DynamicSuperscriptStyle}
`;

const PageNumbers = styled.ol`
  ${BaseStyle};

  display: none;
  list-style: none;
  padding: 0;
  text-align: left;

  @media only screen and (min-width: 50em) {
    display: block;

    & > li:last-child {
      text-align: right;
    }
  }
`;

const MarkColors = {
  default: css`
    background: linear-gradient(
      to bottom,
      rgba(222, 255, 0, 1) 0%,
      rgba(222, 255, 0, 0.5) 60%,
      rgba(222, 255, 0, 1) 100%
    );
  `,
  pink: css`
    background: linear-gradient(
      to bottom,
      rgba(255, 69, 190, 1) 0%,
      rgba(255, 107, 203, 0.5) 60%,
      rgba(255, 107, 203, 1) 100%
    );
  `,
  blue: css`
    background: linear-gradient(
      to bottom,
      rgba(73, 179, 255, 1) 0%,
      rgba(107, 193, 255, 0.5) 60%,
      rgba(107, 193, 255, 1) 100%
    );
  `,
  green: css`
    background: linear-gradient(
      to bottom,
      rgba(67, 226, 15, 1) 0%,
      rgba(39, 229, 54, 0.5) 60%,
      rgba(39, 229, 54, 1) 100%
    );
  `,
  orange: css`
    background: linear-gradient(
      to bottom,
      rgba(255, 134, 9, 1) 0%,
      rgba(255, 177, 34, 0.5) 60%,
      rgba(255, 177, 34, 1) 100%
    );
  `,
};

const DynamicMarkStyle = ({ color }) => {
  const Style = MarkColors[color] ?? MarkColors.default;
  return [BaseStyle, Style];
};

const Mark = styled.mark`
  ${DynamicMarkStyle}
`;

const Tome = (props) => (
  <ThemeProvider theme={theme}>
    <TomeContainer {...props}>
      <StyledTome>
        <Section>
          <header>
            <h1>Projects</h1>
            <h6>Carney J. Cheng</h6>
          </header>
          <Article>
            <ChapterTitle>Document Comparisor</ChapterTitle>
            <p>
              A machine learning powered document parsing and comparison system
            </p>
            <p>
              A document parsing system that automatically identifies key
              interest areas and extracts key-value pairs data from pdf
              documents’ tables, graphs and paragraphs. The system features a
              user flow for manually specifying and defining new document
              formats as an interactive canvas with real-time ocr capability.
              Additional areas are fed to the machine learning dataset, new
              models are produced automatically to cater to the newly added
              document formats.
            </p>
            <p>
              The extracted result can then be automatically compared with a
              provided set of excel documents for data-checking and format
              validation.
            </p>
            <p>
              The system is built with a Test-driven Development cycle, with a
              fully fledged CI/CD pipeline using bitbucket , serverless
              framework and Google Cloud Function. All the backend functions are
              done in a functional-programming style to create a robust,
              side-effect free and mathematically provable data-flow.
            </p>
            <dl>
              <dt>
                <strong>s&bull;k&bull;ills</strong>
              </dt>
              <dd>
                <em>noun</em>
                <br />
                an object or feature that imitates the design of a similar
                artifact made from another material.
              </dd>
            </dl>
            <p>
              Outside of skeuomorphism, the idea actually was not very silly.
              Erin always had an appreciation towards print work. The thought of
              mimicking similar designs onto a web interface has always
              fascinated her. So, why not start with the classic print design of
              a novel?
            </p>
            <p>
              She began to jot down a list of elements that are typically in a
              novel:
            </p>
            <ul>
              <li>Serif typefaces</li>
              <li>
                Header area with the title of the book on the left, and the
                author of said book on the right.{' '}
                <em>
                  Erin is aware that content within the header of the same page
                  as a chapter title does not appear, but she made an exception
                </em>
                .
              </li>
              <li>An adorned chapter title</li>
              <li>
                A dropcap for the first letter of the first paragraph of the
                chapter
              </li>
              <li>Indented paragraphs</li>
              <li>Page numbers</li>
            </ul>
            <p>
              She was then picturing herself making marks on a novel like she
              used to in school. In her true fashion, she got carried away with
              "What ifs."
            </p>
            <ul>
              <li>
                "What if highlighting the text actually looked{' '}
                <Mark>like a highlighter</Mark>?"
                <ul>
                  <li>
                    "What if I wanted it to be <Mark color="pink">pink</Mark>
                    ?"
                  </li>
                  <li>
                    "<Mark color="blue">Blue</Mark>
                    ?"
                  </li>
                  <li>
                    "<Mark color="green">Green</Mark>
                    ?"
                  </li>
                  <li>
                    "<Mark color="orange">Orange</Mark>
                    ?"
                  </li>
                </ul>
              </li>
              <li>
                "What if I found <Strike>a typo</Strike>
                <Super>an error in the content</Super> and wanted to make a
                correction?"
              </li>
              <li>"What if I was viewing this on mobile&mdash;"</li>
            </ul>
            <p>
              The true obstacle showed its form. Responsiveness. How on Earth
              will she make this work?
            </p>
            <p>
              Erin pulled out her notepad and started sketching. First she began
              to illustrate the wireframe of the book in its entirety. Then she
              recorded some notes on how each element would break down as the
              screen size got smaller. After several minutes, the blueprint was
              complete. She came to the conclusion that mobile viewing must stay
              minimal. The pages go away, which makes the page numbers no longer
              have a function so they must go away, and if those go away then
              there is no need for a cover since it is used to help hold and
              protect pages.
            </p>
            <p>
              She looks back at the blinking cursor of her blank canvas in
              Sublime Text 2. Doubt begins to linger in the back of her mind
              with the thought of her new code never being used and her time
              spent ends up being a waste. Her fingers were typing anyway.
            </p>
            <p>Erin smirked, "Well at least I think it's worth a try."</p>
          </Article>
          <footer>
            <PageNumbers>
              <li>1</li>
              <li>2</li>
            </PageNumbers>
          </footer>
        </Section>
      </StyledTome>
    </TomeContainer>
  </ThemeProvider>
);

export default Tome;
