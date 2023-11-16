export enum SEND_MESSAGR {
  JOIN = 'join',
  GET_ROOMS = 'getRooms',
  CREATE_ROOM = 'createRoom',
  GET_USERS_IN_ROOM = 'getUsersInRoom',
  MOVE_ROOM = 'moveRoom',
  LEAVE_ROOM = 'leaveRoom',
  DESTROY_ROOM = 'destroyRoom',
  KICK_USER = 'kickUser',
}

export enum RECEIVE_MESSAGE {
  JOINED = 'joined',
  ROOMS = 'rooms',
  ROOM_CREATED = 'roomCreated',
  ROOM_DESTROYED = 'roomDestroyed',
  ERROR = 'error',
  USERS_IN_ROOM = 'usersInRoom',
  MOVED_ROOM = 'movedRoom',
  USER_LEAVED = 'userLeaved',
  USER_JOINED = 'userJoined',
  LEAVED = 'leaved',
  DESTROYED = 'destroyed',
  KICKED = 'kicked',
}

export enum TYPE {
  NORMAL = 'normal',
  SECRET = 'secret',
}
