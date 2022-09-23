/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ColorForm from '../ColorForm';
import { NativeBaseProvider } from 'native-base';
import { render, screen } from '@testing-library/react-native';
import { fireEvent } from '@testing-library/react-native';

it('renders correctly', () => {
  const OnSubmitFn = jest.fn();
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <ColorForm onFormSubmit={OnSubmitFn} />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
