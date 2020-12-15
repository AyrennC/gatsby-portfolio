/** @jsx jsx */
import EducationPoster from '../../../images/education-poster.png';
import ExperiencePoster from '../../../images/experience-poster.png';
import ProjectsPoster from '../../../images/projects-poster.png';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const PosterContainer = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  position: relative;
`;

const Poster = styled.div`
  border: 6px solid #3a2d27;
  border-radius: 8px;
  position: relative;
`;

const posterRight = keyframes`
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

const dimensionFactory = ({ width, height }) => css`
  width: ${width + 12}px;
  height: ${height + 12}px;
  background-size: ${width}px ${height}px;
`;

const marginFactory = ({ width }) => css`
  margin-left: ${width + 40}px;
`;

const PosterRight = styled(Poster)`
  background: #470d0d url(${ProjectsPoster});
  ${marginFactory};
  ${dimensionFactory};

  &:hover {
    animation: ${posterRight} 1s linear forwards;
    transform-origin: top;
  }
`;

const posterLeft = keyframes`
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const PosterLeft = styled(Poster)`
  background: #ff5038 url(${ExperiencePoster});
  margin-top: -70px;
  ${dimensionFactory};

  &:hover {
    animation: ${posterLeft} 0.5s linear forwards;
  }
`;

const posterBottom = keyframes`
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const PosterBottom = styled(Poster)`
  background: #050505 url(${EducationPoster});
  margin-top: ${({ height }) => 30 - height}px;
  ${({ height }) => marginFactory({ width: height })};
  ${dimensionFactory};

  &:hover {
    animation: ${posterBottom} 0.5s linear forwards;
    transform-origin: top left;
  }
`;

const Posters = ({ width, height, hrefs, ...props }) => (
  <PosterContainer {...props}>
    <a href={hrefs.projects} target="_blank" rel="noreferrer">
      <PosterRight width={width} height={height} />
    </a>
    <a href={hrefs.experience} target="_blank" rel="noreferrer">
      <PosterLeft width={width} height={height} />
    </a>
    <a href={hrefs.education} target="_blank" rel="noreferrer">
      <PosterBottom width={height} height={width} />
    </a>
  </PosterContainer>
);

export default Posters;

Posters.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  hrefs: PropTypes.shape({
    experience: PropTypes.string,
    projects: PropTypes.string,
    education: PropTypes.string,
  }),
};

Posters.defaultProps = {
  width: 140,
  height: 200,
  hrefs: {
    experience: '#',
    projects: '#',
    education: '#',
  },
};
