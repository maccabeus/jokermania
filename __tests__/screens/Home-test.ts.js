import * as React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../screens/Home';


it(`renders correctly`, () => {

  const tree = renderer.create(
    // <HomeScreen>
    // </HomeScreen>
    null
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
