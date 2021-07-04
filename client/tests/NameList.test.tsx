import { render, waitFor, fireEvent, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import NameList, { GET_NAMES } from '../components/NameList';

const data = [
  {
    id: '4704a31d-8bc8-49cf-b617-609c33e691c5',
    name: 'Aaron Conroy',
    address: '767 Kreiger Fields',
    phoneNumber: '752.447.1493 x77056',
    email: 'Melyna12@hotmail.com',
  },
  {
    id: '9f1b5a64-e052-4020-8082-bc7d3bc6186d',
    name: 'Aaron Ratke',
    address: '5245 Keira Point',
    phoneNumber: '1-377-553-6621',
    email: 'Christophe.Champlin57@yahoo.com',
  },
  {
    id: 'd30e33ae-13b9-4db0-a095-ae3082d9b981',
    name: 'Abel Bogisich',
    address: '3796 Lang Gardens',
    phoneNumber: '(207) 718-2958 x23180',
    email: 'Anissa.Armstrong@gmail.com',
  },
  {
    id: '56778979-9716-45f8-83f0-4779e61333e3',
    name: 'Adam Cole',
    address: '50417 Keira Corners',
    phoneNumber: '(213) 618-2549',
    email: 'Ora_Friesen55@hotmail.com',
  },
  {
    id: '15ad22ba-e826-42fa-8d22-67cd409b056b',
    name: 'Adam Ondricka',
    address: '685 Camryn Prairie',
    phoneNumber: '1-885-514-9081',
    email: 'Celestino_Dicki64@yahoo.com',
  },
  {
    id: 'e27ebf04-068d-46ba-9822-98a6092ffa56',
    name: 'Adrian Kozey',
    address: '990 Little Pike',
    phoneNumber: '1-280-460-0903',
    email: 'Rebekah14@gmail.com',
  },
  {
    id: '8cf887e2-a0c8-417c-bd51-4594e97d31e0',
    name: 'Adrienne Jones',
    address: '2771 Eldridge Green',
    phoneNumber: '311.459.7652',
    email: 'Lyla.Goldner31@gmail.com',
  },
  {
    id: 'a2092a54-d902-4a97-8b85-6345d5b0d6cd',
    name: 'Adrienne VonRueden',
    address: '054 Nicolas Avenue',
    phoneNumber: '788-989-4619',
    email: 'Tyree.Tremblay@yahoo.com',
  },
  {
    id: '9f6359b3-6fdb-443c-86d2-62aea279a03e',
    name: 'Adrienne Welch',
    address: '6483 Kautzer Ways',
    phoneNumber: '(630) 390-4052 x56940',
    email: 'Coty_Lueilwitz@hotmail.com',
  },
  {
    id: '1cb8eb93-9df2-4fe2-a9f9-7d4830e7af33',
    name: 'Agnes Bosco',
    address: '236 Elta Ford',
    phoneNumber: '826.876.5093 x668',
    email: 'Malika.Hessel@gmail.com',
  },
  {
    id: '7aa5cad2-3751-49a8-8b2a-74698b3a67d9',
    name: 'Agnes Braun',
    address: '603 Marty Wall',
    phoneNumber: '952.491.8232',
    email: 'Molly_Stanton60@yahoo.com',
  },
  {
    id: 'f28d01ac-18e2-4dfc-bbd0-526ec049425d',
    name: 'Agnes Koelpin',
    address: "545 O'Connell Lakes",
    phoneNumber: '1-359-631-2655 x644',
    email: 'Clementine13@hotmail.com',
  },
  {
    id: '293ddac5-bc2d-42b7-8220-80c622218cf1',
    name: 'Agnes Price',
    address: '67406 Bergnaum Ridges',
    phoneNumber: '831-714-7248',
    email: 'Alfonso32@hotmail.com',
  },
  {
    id: 'd298555b-c7aa-4b21-9c7e-5ff22bb106c8',
    name: 'Agnes Torphy',
    address: '89492 Doyle Stream',
    phoneNumber: '(740) 499-3715',
    email: 'Mariano57@gmail.com',
  },
  {
    id: '378c4e20-9da0-40ea-8527-0ab0b59e16e5',
    name: 'Al Howe',
    address: '952 Ludwig Mountain',
    phoneNumber: '1-475-733-8890 x73768',
    email: 'Maxime.Nader37@hotmail.com',
  },
  {
    id: '4590d92b-58d0-4a7c-84d6-7f7f9fb205f5',
    name: 'Alan Kub',
    address: '773 Lind Burg',
    phoneNumber: '688.275.5306',
    email: 'Aurore.Huel@yahoo.com',
  },
  {
    id: '6904523b-d802-46ca-abb0-e074118e9234',
    name: 'Alan Nolan',
    address: '3066 Heaney Meadows',
    phoneNumber: '246.503.4330',
    email: 'Paris_Halvorson46@yahoo.com',
  },
  {
    id: '2057a9fb-4669-4d5d-b94c-25786d68fca0',
    name: 'Alan Oberbrunner',
    address: '53010 Little Prairie',
    phoneNumber: '325.214.4365 x4313',
    email: 'Jeffery_Bernier81@yahoo.com',
  },
  {
    id: '0cb26e27-f9a0-41f5-a318-36d123717c6b',
    name: 'Alan Schultz',
    address: '140 Ratke Turnpike',
    phoneNumber: '(872) 658-3260 x519',
    email: 'Harrison.Hand50@hotmail.com',
  },
  {
    id: '4a18b1af-ff23-4942-b5f4-9fb797d58493',
    name: 'Albert Bode',
    address: '177 Webster Prairie',
    phoneNumber: '675-986-4925',
    email: 'Nicola64@yahoo.com',
  },
];

describe('NameList', () => {
  it('should render with data', async () => {
    const mocks = [
      {
        request: {
          query: GET_NAMES,
          variables: {
            offset: 0,
            limit: 20,
          },
        },
        result: () => {
          return {
            data: {
              names: data.slice(0, 5),
            },
          };
        },
      },
    ];

    const { container, getByTestId, getAllByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NameList />
      </MockedProvider>
    );

    await waitFor(() => getByTestId('name-list'));
    expect(container).toMatchSnapshot();
    expect(getAllByTestId('name-item').length).toBe(5);
  });

  it('should filter data', async () => {
    const mocks = [
      {
        request: {
          query: GET_NAMES,
          variables: {
            offset: 0,
            limit: 20,
          },
        },
        result: () => {
          return {
            data: {
              names: data.slice(0, 5),
            },
          };
        },
      },
    ];

    const { container, getByTestId, getAllByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NameList />
      </MockedProvider>
    );

    await waitFor(() => getByTestId('name-list'));
    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'aar' } });

    act(() => {
      expect(container).toMatchSnapshot();
      expect(getAllByTestId('name-item').length).toBe(2);
    });
  });
});
