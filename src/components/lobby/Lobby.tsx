import { useContext, useEffect, useState } from 'react';
import { Plus } from '../icon/Plus';
import { CreateRoom } from '../modal/CreateRoom';
import { LobbyProps } from '../../common/common.type';
import { SocketContext } from '../../socket/SocketContext';

export const Lobby = ({ changeState }: LobbyProps) => {
  const value = useContext(SocketContext);
  const { GetUsers, userList, joinConnect } = value;

  useEffect(() => {
    if (joinConnect) GetUsers();
  }, [joinConnect]);

  console.log('userList', userList);

  const [open, setOpen] = useState<boolean>(false);
  const openCreateRoom = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        로비에 있는 인원
        <ul>
          {userList.map((user) => (
            <li key={user.id}>{user.nickname}</li>
          ))}
        </ul>
      </div>
      <button onClick={openCreateRoom}>
        <Plus />
        방만들기
      </button>
      {open && (
        <CreateRoom openCreateRoom={openCreateRoom} changeState={changeState} />
      )}
    </div>
  );
};
