import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import dragonsSlice from '../../../redux/dragons/dragonsSlice';
import store from '../../../redux/store';
import '@testing-library/jest-dom';

describe('Dragon component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <dragonsSlice/>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('that jest is working', () => {
    expect(true).toBe(true);
  });
});
