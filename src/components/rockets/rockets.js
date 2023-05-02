import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import rocket from '../assets/images.jpg';
import '../styles/rockets.css';
// import { RocketsData } from '../../redux/rockets/rocketSlice';

function Rockets() {
  const arr = [
    {
      name: 'Falcon1',
      description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      flickr_images: rocket,
    },
    {
      name: 'Falcon2',
      description: 'Falcon 2 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      flickr_images: rocket,
    },
    {
      name: 'Falcon3',
      description: 'Falcon 3 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was and expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      flickr_images: rocket,
    },
    {
      name: 'Falcon4',
      description: 'Falcon 4 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      flickr_images: rocket,
    },
  ];
  // const displayData = useSelector((state) => state.Rocket.Rockets);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(RocketsData());
  // }, [dispatch]);
  return (
    <div>
      {arr.map((rockets) => (
        <div key={rockets.id}>
          <img className="falcon" alt="Falcon" src={rockets.flickr_images} />
          {' '}
          <br />
          <h2>{rockets.name}</h2>
          {' '}
          <br />
          {rockets.description}
          {' '}
          <br />
        </div>
      ))}
    </div>
  );
}

export default Rockets;
