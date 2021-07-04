import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Name from '../components/Name';

describe('Name component', () => {
  it('should render component correctly', () => {
    const { container, getByText } = render(<Name name="hello" />);

    expect(container).toMatchSnapshot();
    expect(getByText('hello')).toBeInTheDocument();
  });
});
