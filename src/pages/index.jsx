/** @jsx jsx */
import Cafe from '../components/Cafe';
import Layout from '../components/Layout';
import { jsx } from 'theme-ui';

const IndexPage = () => (
  <Layout>
    <main>
      <Cafe />
    </main>
  </Layout>
);

export default IndexPage;
