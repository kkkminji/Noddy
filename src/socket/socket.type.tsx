import { TYPE } from '../common/common.enum';

export interface InitJoined {
  room: RoomsList;
  user: User;
}

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
  users?: User[];
}

export interface Users {
  users: UserList[];
}

export interface UserList {
  id: string;
  nickname: string;
  isAdmin?: boolean;
}

export interface ContextType {
  joinInfo: InitJoined | null;
  joinConnect: boolean;
  rooms: RoomsList[];
  userList: UserList[];
  Join: (event: string) => void;
  GetRooms: () => void;
  CreateRoom: (event: CreateRoomType) => void;
  GetUsers: () => void;
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

export interface MoveRoomType {
  roomId: string;
  passwd?: string;
}
