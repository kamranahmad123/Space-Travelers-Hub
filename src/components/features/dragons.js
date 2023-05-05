import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragonData, reserveD, cancelD } from '../../redux/dragons/dragonsSlice';
import '../styles/dragonStyle.css';

function Dragons() {
  // const dragons = useSelector((state) => state.dragons);  
  // const loading = useSelector((state) => state.dragons.loading);
  const dragons = useSelector((state) => state.dragons.dragons.map((dragon) => {
    if (state.dragons.reservedDragons.some(
      (reservedDrag) => reservedDrag.dragon.id === dragons.dragons.id,
    )) {
      return { ...dragons, reserved: true };
    }
    return { ...dragons, reserved: false };
  }));
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragonData());
  }, [dispatch]);

  const handleReserveBtn = (id) => {
    dispatch(reserveD(id));
  };
  const handleCancelBtn = (id) => {
    dispatch(cancelD(id));
  };

  if (!dragons) {
    return <div>loading...</div>;
  }

  return (
    <ul>
      {
            dragons.map((dragon) => (
              <li className="dragonCont" key={dragon.id}>
                <div>
                  <img className="dragonimg" alt="dragons" src={dragon.flickr_images} />
                </div>
                <div className="dragonDetails">
                  <h3>
                    {dragon.name}
                    {dragon.reserved}
                  </h3>
                  <h4>{dragon.type}</h4>

                  <div className="container_dragons">
              {dragon.reserved && <p className="reserved">Reserved</p>}
              <p>{dragon.description}</p>
            </div>

                  {!dragon.reserved && <button onClick={() => handleReserveBtn(dragon.id)} className="dragonBtn" type="submit">Reserve Dragon</button> }
                  {dragon.reserved && <button onClick={() => handleCancelBtn(dragon.id)} className="cancelBtn" type="submit">Cancel Reservation</button> }
                </div>
              </li>
            ))
        }
    </ul>
  );
}

export default Dragons;
