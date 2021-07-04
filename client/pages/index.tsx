import Link from 'next/link';
import Name from '../components/Name';
import { gql } from '@apollo/client';
import client from '../lib/appolo-client';

type IndexProps = {
  name: string;
};

const Index = ({ name }: IndexProps) => (
  <div>
    Welcome, <Name name={name} />
    <br />
    <br />
    <Link href="/about">
      <a>About</a>
    </Link>
    <br />
    <Link href="/names">
      <a>Name list</a>
    </Link>
  </div>
);

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query name {
        name
      }
    `,
  });

  return {
    props: {
      name: data.name,
    },
  };
}

export default Index;
