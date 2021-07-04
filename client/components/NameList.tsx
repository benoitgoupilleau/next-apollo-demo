import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export const GET_NAMES = gql`
  query names($offset: Int, $limit: Int) {
    names(offset: $offset, limit: $limit) {
      id
      name
      email
      address
      phoneNumber
    }
  }
`;

type People = {
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
};

const NameList = () => {
  const [search, setSearch] = useState('');
  const { loading, data, fetchMore, error } = useQuery(GET_NAMES, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value.replace('script', '').replace('<', '').trim());
  };

  const handleFetchMore = (event: React.MouseEvent) => {
    event.preventDefault();

    return fetchMore({
      variables: {
        offset: data.names.length,
      },
    });
  };

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className="names_header">
        <input data-testid="search-input" type="text" placeholder="Search" value={search} onChange={handleChange} />
        <button data-testid="fetch-more" onClick={handleFetchMore}>
          Load more
        </button>
      </div>
      <p>{data?.names && `Displaying ${data.names.length} items`}</p>
      <ul className="names" data-testid="name-list">
        {data.names
          .filter(({ name }: People) => name.toUpperCase().startsWith(search.toUpperCase()))
          .map(({ id, name, email, address, phoneNumber }: People) => (
            <li key={id} className="name_item" data-testid="name-item">
              <h3>{name}</h3>
              <p>{address}</p>
              <p>{email}</p>
              <p>{phoneNumber}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default NameList;
