import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import '@testing-library/jest-dom';
import Missions from '../../rockets/missions';
describe('Missions component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('that jest is working', () => {
    expect(true).toBe(true);
  });
});
