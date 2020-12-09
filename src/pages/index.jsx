/** @jsx jsx */
import { Layout } from '../components';
import Monitor from '../components/Monitor/Monitor';
import { Container, jsx } from 'theme-ui';

// markup
const IndexPage = () => (
  <Layout>
    <main>
      <Container p={4}>
        <Monitor />
      </Container>
    </main>
  </Layout>
);

export default IndexPage;
