/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import { render, screen, fireEvent } from '@testing-library/react-native';
import Home from '../Home';
import { NativeBaseProvider } from 'native-base';

it('renders correctly', () => {
  const tree = render(
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

