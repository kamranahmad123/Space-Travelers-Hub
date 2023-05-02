import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/rockets.css';
import { RocketsData } from '../../redux/rockets/rocketSlice';

function Rockets() {
  const displayData = useSelector((state) => state.Rocket.Rockets);
  const dispatch = useDispatch();
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
            <h3>{rockets.name}</h3>
            <p>{rockets.description}</p>
            <button className="rocket-button" type="submit">Reserve Rocket</button>
          </div>

          <br />
        </div>
      ))}
    </div>
  );
}

export default Rockets;
