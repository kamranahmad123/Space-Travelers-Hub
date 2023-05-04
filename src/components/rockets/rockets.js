import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/rockets.css';
import { RocketsData, RocketsBooking, CancelRocket } from '../../redux/rockets/rocketSlice';

function Rockets() {
  const displayData = useSelector((state) => state.Rocket.Rockets);
  const dispatch = useDispatch();
  const handlereservedButton = (id) => {
    dispatch(RocketsBooking(id));
  };
  const handleCancelButton = (id) => {
    dispatch(CancelRocket(id));
  };
  useEffect(() => {
    dispatch(RocketsData());
  }, [dispatch]);
  return (
    <div className="rocket-entire">
      {displayData.map((rockets) => (
        <div className="rockets-container" key={rockets.id}>
          <div className="rocket-picture">
            <img className="falcon" alt="Falcon" src={rockets.flickr_images} />
          </div>
          <div className="rocket-description">
            <h3 className="name">{rockets.name}</h3>
            <div className="container">
              <p>{rockets.description}</p>
            </div>
            {!rockets.reserved && <button onClick={() => handlereservedButton(rockets.id)} className="rocket-button" type="submit">Reserve Rocket</button> }
            {rockets.reserved && <button onClick={() => handleCancelButton(rockets.id)} className="rocket-cancel" type="submit">Cancel Reservation</button> }
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Rockets;
