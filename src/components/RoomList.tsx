import { useContext, useEffect } from 'react';
import { GridRoom } from './Styled';
import { SocketContext } from '../socket/SocketContext';

export const RoomList = () => {
  console.log('roomlist');
  const value = useContext(SocketContext);
  const { GetRooms, rooms } = value;

  useEffect(() => {
    GetRooms();
  }, []);

  return (
    <GridRoom>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </GridRoom>
  );
};
