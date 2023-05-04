import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../../rockets/missions';
import { joinMission, leaveMission } from '../../redux/missions/missionSlice';

const mockStore = configureStore([]);

describe('Missions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      Missions: {
        Missions: [
          {
            mission_id: 'mission1',
            mission_name: 'Mission 1',
            description: 'Description of Mission 1',
          },
          {
            mission_id: 'mission2',
            mission_name: 'Mission 2',
            description: 'Description of Mission 2',
          },
        ],
        joinedMissions: [],
      },
    });
  });

  test('renders the mission table with correct data', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Description of Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Not a member')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Description of Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Not a member')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });

  test('clicking on "Join Mission" dispatches the joinMission action', () => {
    const missionId = 'mission1';
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Join Mission'));

    expect(store.dispatch).toHaveBeenCalledWith(joinMission(missionId));
  });

  test('clicking on "Leave Mission" dispatches the leaveMission action', () => {
    const missionId = 'mission1';
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Join Mission'));

    fireEvent.click(screen.getByText('Leave Mission'));

    expect(store.dispatch).toHaveBeenCalledWith(leaveMission(missionId));
  });
});
