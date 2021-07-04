import Link from 'next/link';

import { NameList } from '../components/NameList';

const Names = () => (
  <div>
    Names list
    <br />
    <br />
    <Link href="/">
      <a>Go Back</a>
    </Link>
    <NameList />
  </div>
);

export default Names;
