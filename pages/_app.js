import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // 采用Layout主题来包裹所有的页面
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
