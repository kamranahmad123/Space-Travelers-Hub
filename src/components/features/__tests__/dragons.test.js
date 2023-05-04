import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dragons from '../dragons';

const mockStore = configureStore([]);

describe('Dragons component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dragons: {
        dragons: [
          {
            id: 'dragon1',
            name: 'Dragon 1',
            type: 'Type 1',
            description: 'Description 1',
            flickr_images: 'image1.jpg',
          },
          {
            id: 'dragon2',
            name: 'Dragon 2',
            type: 'Type 2',
            description: 'Description 2',
            flickr_images: 'image2.jpg',
          },
        ],
        loading: false,
      },
    });
  });

  it('renders the list of dragons', () => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    const dragonNames = screen.getAllByRole('heading', { level: 3 }).map((element) => element.textContent);
    expect(dragonNames).toEqual(['Dragon 1', 'Dragon 2']);

    const dragonTypes = screen.getAllByRole('heading', { level: 4 }).map((element) => element.textContent);
    expect(dragonTypes).toEqual(['Type 1', 'Type 2']);

    const dragonDescriptions = screen.getAllByRole('listitem').map((element) => element.textContent);
    expect(dragonDescriptions).toEqual(['Description 1', 'Description 2']);
  });
});
