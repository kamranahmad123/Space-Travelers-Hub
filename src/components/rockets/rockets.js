import React from 'react';
// import { useSelector } from 'react-redux';
import logo from '../assets/images.jpg';
import '../styles/rockets.css';
// import { useSelector } from 'react-redux';

function Rockets() {
  const arr = [
    {
      name: 'Falcon1',
      description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: logo,
    },
    {
      name: 'Falcon2',
      description: 'Falcon 2 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: logo,
    },
    {
      name: 'Falcon3',
      description: 'Falcon 3 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: logo,
    },
    {
      name: 'Falcon4',
      description: 'Falcon 4 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: logo,
    },
  ];
  // const displayData = useSelector((store) => store.any);
  // console.log(displayData);
  return (
    <div>
      {arr.map((rockets) => (
        <div key={rockets.name}>
          {rockets.name}
          {' '}
          <br />
          {rockets.description}
          {' '}
          <br />
          <img className="falcon" alt="Flacon" src={rockets.img} />
          {' '}
          <br />
        </div>
      ))}
    </div>
  );
}

export default Rockets;
