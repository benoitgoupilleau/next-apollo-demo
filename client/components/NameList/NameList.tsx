import { useQuery, gql } from '@apollo/client';

const GET_NAMES = gql`
  query names {
    names {
      name
      email
      address
      phoneNumber
    }
  }
`;

const NameList = () => {
  const { loading, data, fetchMore } = useQuery(GET_NAMES, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });

  if (loading) {
    return <div>Loading</div>;
  }
  return <div>NameList</div>;
};

export default NameList;
