/** @jsx jsx */
import Decorations from '../components/Decorations';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Terminal from '../components/Terminal';
import { jsx } from 'theme-ui';

const IndexPage = () => (
  <Layout>
    <main>
      <Decorations />
      <Table>
        <Terminal />
      </Table>
    </main>
  </Layout>
);

export default IndexPage;
