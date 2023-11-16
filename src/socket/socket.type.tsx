import { TYPE } from '../common/common.enum';

export interface User {
  id: string;
  nickname: string;
}

export interface getRooms {
  rooms: RoomsList[];
}
export interface getRoom {
  room: RoomsList;
}

export interface RoomsList {
  currentCnt: number;
  id: string;
  limitCnt: number;
  name: string;
  type: TYPE;
}

export interface ContextType {
  users: User[];
  // joinConnect: boolean;
  rooms: RoomsList[];
  Join: (event: string) => void;
  GetRooms: () => void;
}

export interface SendMessage {
  nickname?: string;
}
