import { useState } from 'react';
import { Plus } from '../icon/Plus';
import { CreateRoom } from '../modal/CreateRoom';

export const Lobby = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openCreateRoom = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>대기 인원 리스트</div>
      <button onClick={openCreateRoom}>
        <Plus />
        방만들기
      </button>
      {open && <CreateRoom openCreateRoom={openCreateRoom} />}
    </div>
  );
};
