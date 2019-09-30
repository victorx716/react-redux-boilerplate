import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('should render ExpenseDashboardPage to the UI', () => {
  const wrapper = shallow( <NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});