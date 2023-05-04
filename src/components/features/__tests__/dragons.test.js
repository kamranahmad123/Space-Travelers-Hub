import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store';
import Dragons from '../dragons';
import { getDragonData, reserveD, cancelD } from '../../../redux/dragons/dragonsSlice';

const mockStore = configureStore([]);
describe ('Dragons', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            dragons: {
                dragon: [
                    {
                        id: 1,
                        name: 'Dragon 1',
                        type: 'Type 1',
                        description: 'It is dragon1 ....',
                        flickr_images: 'https://www.dragons.com/dragon1.jpg'
                    },
                    {
                        id: 2,
                        name: 'Dragon 2',
                        type: 'Type 2',
                        description: 'It is the dragon two ....',
                        flickr_images: 'https://www.dragons.com/dragon2.jpg'
                    },
                ],
                loading: false,
            },
        });
    });

    it('dispatches cancelD action when cancel button is clicked', () => {
        render(
          <Provider store={store}>
            <Dragons />
          </Provider>
        );
        const cancelButton = screen.getByText('Cancel Reservation');
        fireEvent.click(cancelButton);
        expect(store.dispatch).toHaveBeenCalledWith(cancelD(2));
      });
      it('dispatches getDragonData action on mount', () => {
        render(
          <Provider store={store}>
            <Dragons />
          </Provider>
        );
        expect(store.dispatch).toHaveBeenCalledWith(getDragonData());
      });
    
      it('dispatches reserveD action when reserve button is clicked', () => {
        render(
          <Provider store={store}>
            <Dragons />
          </Provider>
        );
        const reserveButton = screen.getByText('Reserve Dragon');
        fireEvent.click(reserveButton);
        expect(store.dispatch).toHaveBeenCalledWith(reserveD(1));
      });
});
