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
  joinConnect: boolean;
  rooms: RoomsList[];
  Join: (event: string) => void;
  GetRooms: () => void;
  CreateRoom: (event: CreateRoomType) => void;
}

export interface SendMessage {
  nickname?: string;
  name?: string;
  type?: TYPE;
  passwd?: string;
  limitCnt?: number;
}

export interface DestroyRoomId {
  roomId: string;
}

export interface CreateRoomType {
  name: string;
  type?: TYPE;
  passwd?: string;
  limitCnt?: number;
}
