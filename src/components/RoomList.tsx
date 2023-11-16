import { useContext, useEffect, useState } from 'react';
import { GridRoom } from './Styled';
import { SocketContext } from '../socket/SocketContext';

import { Consumer } from '../socket/SocketContext';

export const RoomList = () => {
  console.log('roomlist');
  // const value = useContext(SocketContext);
  // const { GetRooms, rooms } = value;

  // const [test, setTest] = useState(rooms);

  // useEffect(() => {
  //   setTest(rooms);
  //   console.log('22', test);
  // }, []);

  // console.log('test', test, value);

  // useEffect(() => {
  //   GetRooms();
  // }, []);

  return (
    <Consumer>
      {(value) => (
        <GridRoom>
          qwewqeqwe
          <ul>
            {value.rooms.map((room) => (
              <li key={room.id}>{room.name}</li>
            ))}
          </ul>
        </GridRoom>
      )}
    </Consumer>
  );
};
