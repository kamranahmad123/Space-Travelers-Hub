import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/dragonStyle.css';

function Dragons() {
  const dragons = useSelector((state) => state.dragons.dragon);
  return (
    <ul>
      {
            dragons.map((dragon) => (
              <li className="dragonCont" key={dragon.id}>
                <div>
                  <img className="dragonimg" alt="dragons" src={dragon.flickr_images} />
                </div>
                <div className="dragonDetails">
                  <h3>{dragon.name}</h3>
                  <h4>{dragon.type}</h4>
                  <div>{dragon.description}</div>
                  <button className="dragonBtn" type="submit">Reserve Dragon</button>
                </div>
              </li>
            ))
        }
    </ul>
  );
}

export default Dragons;
