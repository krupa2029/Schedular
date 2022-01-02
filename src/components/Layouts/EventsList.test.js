import React from 'react';
import renderer from 'react-test-renderer';
import { mockEventsData } from '../../../__mocks__/fetchdataMock';
import EventsList from './EventsList';

test('should render EventsList component', () => {
  const tree = renderer
    .create(<EventsList loadedData={mockEventsData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
