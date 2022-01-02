import React from 'react';
import renderer from 'react-test-renderer';
import LoadingSpinner from './LoadingSpinner';

test('should render loading spinner', () => {
  const tree = renderer.create(<LoadingSpinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
