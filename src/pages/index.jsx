/** @jsx jsx */
import { Layout } from '../components';
import resume from '../data/Carney__Resume.pdf';
import { Container, jsx } from 'theme-ui';

// markup
const IndexPage = () => (
  <Layout>
    <main>
      <Container p={4}>
        <h1
          sx={{
            color: 'primary',
            fontFamily: 'heading',
          }}
        >
          Hi, I am Carney!
        </h1>
        <span
          sx={{
            color: 'secondary',
            fontFamily: 'body',
          }}
        >
          - a software engineer trying to make my way in this universe.
          <br />
          this website is under construction, but don&apos;t let that stop you
          from taking a look at my{' '}
          <a sx={{ color: 'primary' }} href={resume}>
            resume
          </a>
          .
        </span>
      </Container>
    </main>
  </Layout>
);

export default IndexPage;
