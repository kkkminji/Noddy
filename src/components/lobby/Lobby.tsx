import { Plus } from '../icon/Plus';
import { CreateRoom } from '../modal/CreateRoom';

export const Lobby = () => {
  return (
    <div>
      <div>대기 인원 리스트</div>
      <button>
        <Plus />
        방만들기
      </button>
      <CreateRoom />
    </div>
  );
};
