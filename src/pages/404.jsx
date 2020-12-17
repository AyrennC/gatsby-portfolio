/** @jsx jsx */
import Layout from '../components/Layout';
import SnowField from '../components/SnowField/SnowField';
import { jsx } from 'theme-ui';

const NotFoundPage = () => (
  <Layout>
    <main>
      <SnowField sx={{ minWidth: '100vw', minHeight: '100vh' }} />
    </main>
  </Layout>
);

export default NotFoundPage;
