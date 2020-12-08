/** @jsx jsx */
import { jsx } from 'theme-ui';

// styles
const pageStyles = {
  color: '#2d3436',
  padding: '96px',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#fdcb6e',
};

// markup
const IndexPage = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>
      Hi, I am Carney
      <br />
      <span style={headingAccentStyles}>
        — this website is under construction.
      </span>
    </h1>
  </main>
);

export default IndexPage;
