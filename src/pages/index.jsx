/** @jsx jsx */
import Layout from '../components/Layout';
import Monitor from '../components/Monitor';
import NeonSign from '../components/NeonSign';
import Table from '../components/Table';
import Terminal from '../components/Terminal';
import { jsx } from 'theme-ui';

const IndexPage = () => (
  <Layout>
    <main>
      <NeonSign sx={{ marginLeft: 5 }}>
        <b>
          c<span>ar</span>n<span>eyc</span>.
        </b>
      </NeonSign>
      <Table>
        <Monitor>
          <Terminal />
        </Monitor>
      </Table>
    </main>
  </Layout>
);

export default IndexPage;
