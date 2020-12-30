import Link from 'next/link';
// import style from '../static/Style';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => (
  <Layout header="Other" title="Other page.">
    {/* <p>This is Other page.</p> */}
    <Counter />
    <hr />
    <div>
      <Link href="/">
        <a>&lt;&lt; Back to Index page</a>
      </Link>
    </div>
  </Layout>
)