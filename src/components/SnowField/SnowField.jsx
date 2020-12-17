/** @jsx jsx */
import theme from './Theme';
import { css, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { Link } from 'gatsby';
import { mix, transparentize, lighten } from 'polished';
import * as R from 'ramda';
import { jsx } from 'theme-ui';

const trees = (direction, size, color) => {
  const space = size * 1.2;
  const shadows = (i) => {
    const n = i + 1;
    const offset = ((Math.random() * 20) / 10 - 1) * 50;
    return `
      ${direction * n * space + offset}px
      ${direction * -n * space + offset}px
      15px ${lighten(Math.random() * 0.2 + 0.1, color)}
    `;
  };

  const boxShadow = R.times(shadows, 16).join(',');
  return css`
    box-shadow: ${boxShadow};
  `;
};

const DynamicFieldStyle = ({ theme: { colors, fonts } }) => css`
  height: 100%;
  position: relative;
  color: ${colors.text.secondary};
  font-family: ${fonts.body};

  z-index: 1;
  background-color: ${mix(0.5, colors.sky.dark, colors.sky.light)};
  background-image: linear-gradient(
    to bottom,
    ${colors.sky.dark} 0%,
    ${colors.sky.light} 80%
  );
  overflow: hidden;
`;

const Field = styled.div`
  ${DynamicFieldStyle}
`;

const Snow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 20;
`;

const Title = styled.div`
  padding: 20vh 20px 0 20px;

  text-align: center;
  font-size: 5vh;
`;

const DynamicHomeLinkStyle = ({ theme: { colors } }) => css`
  font-size: 0.6em;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  opacity: 0.6;
  border-bottom: 1px dashed ${transparentize(0.5, colors.text.secondary)};

  &:hover {
    opacity: 1;
  }
`;

const HomeLink = styled(Link)`
  ${DynamicHomeLinkStyle}
`;

const DynamicGroundStyle = ({ treeSize, theme: { colors } }) => {
  const forrestLeft = trees(-1, treeSize, colors.text.secondary);
  const forrestRight = trees(1, treeSize, colors.text.secondary);

  return css`
    height: 160px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    background: ${colors.grey.white};
    box-shadow: 0 0 10px 10px ${colors.grey.white};

    &::before,
    &::after {
      // Trees
      content: '';
      display: block;
      width: ${treeSize}px;
      height: ${treeSize}px;
      position: absolute;
      top: -${treeSize / 4}px;

      z-index: -1;
      background: transparent;
      transform: scaleX(0.2) rotate(45deg);
    }

    &::after {
      left: 50%;
      margin-left: -${treeSize / 1.5}px;

      ${forrestLeft};
    }

    &::before {
      right: 50%;
      margin-right: -${treeSize / 1.5}px;

      ${forrestRight};
    }
  `;
};

const Ground = styled.div`
  ${DynamicGroundStyle}
`;

const DynamicMoundStyle = ({
  width,
  height,
  footprintWidth,
  footprintHeight,
  theme: { colors },
}) => css`
  margin-top: -100px;

  font-weight: 800;
  font-size: 180px;
  text-align: center;
  color: ${colors.text.primary};
  pointer-events: none;

  &::before {
    content: '';
    display: block;
    width: ${width}px;
    height: ${height}px;
    position: absolute;
    left: 50%;
    margin-left: -${width / 2}px;
    top: 50px;
    z-index: 1;

    border-radius: 100%;
    background-color: ${colors.sky.light};
    background-image: linear-gradient(
      to bottom,
      ${lighten(0.1, colors.sky.dark)},
      ${colors.grey.white} 60px
    );
  }

  &::after {
    content: '';
    display: block;
    width: ${footprintWidth}px;
    height: ${footprintHeight}px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 68px;

    z-index: 2;
    background: ${colors.text.primary};
    border-radius: 100%;
    transform: rotate(-15deg);
    box-shadow: -${footprintWidth * 2}px ${footprintHeight * 2}px 0 1px ${colors.text.primary},
      -${footprintWidth * 4.5}px ${footprintHeight}px 0 2px ${colors.text.primary},
      -${footprintWidth * 7}px ${footprintHeight * 4}px 0 3px ${colors.text.primary};
  }
`;

const Mound = styled.div`
  ${DynamicMoundStyle}
`;

const MoundTitle = styled.div`
  transform: rotate(6deg);
`;

// 30px
const DynamicMoundSpadeStyle = ({
  handleHeight = 30,
  theme: { colors },
}) => css`
  display: block;
  width: 35px;
  height: 30px;
  position: absolute;
  right: 50%;
  top: 42%;
  margin-right: -250px;

  z-index: 0;
  transform: rotate(35deg);
  background: ${colors.text.primary};

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
    width: 40%;
    height: ${handleHeight}px;
    bottom: 98%;
    left: 50%;
    margin-left: -20%;

    background: ${colors.text.primary};
  }

  &::after {
    width: 100%;
    height: 30px;
    top: -${handleHeight + 25}px;
    left: 0;
    box-sizing: border-box;

    border: 10px solid ${colors.text.primary};
    border-radius: 4px 4px 20px 20px;
  }
`;

const MoundSpade = styled.div`
  ${DynamicMoundSpadeStyle}
`;

const SnowField = (props) => (
  <ThemeProvider theme={theme}>
    <Field {...props}>
      <Snow />
      <Title>
        <p>
          Oh dear.
          <br />
          This page doesn&apos;t exist yet.
        </p>
        <HomeLink to="/">Hitch a ride back home.</HomeLink>
      </Title>
      <Ground treeSize={250}>
        <Mound width={600} height={200} footprintWidth={28} footprintHeight={6}>
          <MoundTitle>404</MoundTitle>
          <MoundSpade />
        </Mound>
      </Ground>
    </Field>
  </ThemeProvider>
);

export default SnowField;
