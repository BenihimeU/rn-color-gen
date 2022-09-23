/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ColorList from '../ColorList';
import {NativeBaseProvider} from 'native-base';

it('renders correctly', () => {
  const list = [{rgb: [225, 225, 225], weight: 10}];
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <ColorList list={list} />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
