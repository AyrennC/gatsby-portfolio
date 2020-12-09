/** @jsx jsx */
import { Layout } from '../components';
import Monitor from '../components/Monitor';
import Resume from '../data/Carney__Resume.pdf';
import { Container, jsx } from 'theme-ui';

// markup
const IndexPage = () => (
  <Layout>
    <main>
      <Container p={4}>
        <Monitor>
          <div>
            <h1>Hi, I am Carney!</h1>
            <p>
              &gt; just a software engineer trying to make my way through the
              world.
              <br />
              <br />
              &gt; this website is under construction, but don&apos;t let that
              stop you from taking a look at my{' '}
              <a
                href={Resume}
                sx={{ color: 'inherit' }}
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
              .
            </p>
          </div>
        </Monitor>
      </Container>
    </main>
  </Layout>
);

export default IndexPage;
