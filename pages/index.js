import Link from 'next/link';
// import Counter from '../components/Counter';
// import style from '../static/Style';
import Layout from '../components/Layout';
// import Image from '../static/Image';
import Counter from '../components/Counter';

export default () => (
  <Layout header="Next" title="Top page.">
    {/* <p>Welcome to next.js!</p>
    <Image fname="image.jpg" size="250" /> */}
    <Counter />
    <hr />
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </Layout>
);