import { useContext, useEffect } from 'react';
import { GridRoom } from './Styled';
import { SocketContext } from '../../socket/SocketContext';
import { RoomsList } from '../../socket/socket.type';
import { TYPE } from '../../common/common.enum';

export const RoomList = () => {
  const value = useContext(SocketContext);
  const { GetRooms, rooms, joinConnect } = value;

  useEffect(() => {
    console.log('joinConnect', joinConnect);

    if (joinConnect) GetRooms();
  }, [joinConnect]);

  const clickRoom = (room: RoomsList) => {
    console.log('room', room);
    console.log(room.type === TYPE.SECRET);
  };

  return (
    <GridRoom>
      <ul>
        {rooms.map((room) => (
          <li key={room.id} onClick={() => clickRoom(room)}>
            {room.name}
          </li>
        ))}
      </ul>
    </GridRoom>
  );
};
