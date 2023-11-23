import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import socketio from 'socket.io-client';
import {
  InitJoined,
  ContextType,
  SendMessage,
  getRooms,
  getRoom,
  RoomsList,
  DestroyRoomId,
  CreateRoomType,
  UserList,
  Users,
  MoveRoomType,
} from './socket.type';
import { SEND_MESSAGR, RECEIVE_MESSAGE } from '../common/common.enum';

const ENDPOINT = 'wss://wrtc-study.ijanus.kr';
const socket = socketio(ENDPOINT, {
  transports: ['websocket'],
});

const defaultContextValue: ContextType = {
  joinInfo: null,
  joinConnect: false,
  rooms: [],
  userList: [],
  Join: () => {},
  GetRooms: () => {},
  CreateRoom: () => {},
  GetUsers: () => {},
};

export const SocketContext = createContext<ContextType>(defaultContextValue);

type ResponsiveProviderPros = {};

export const SocketProvider: FC<PropsWithChildren<ResponsiveProviderPros>> = ({
  children,
}) => {
  const joinInfo = useRef<InitJoined | null>(null);
  const [joinConnect, setJoinConnect] = useState<boolean>(false);
  const [rooms, setRooms] = useState(() => {
    const initialRooms: RoomsList[] = [];
    return initialRooms;
  });
  const [userList, setUserList] = useState(() => {
    const users: UserList[] = [];
    return users;
  });

  useEffect(() => {
    const nickName = localStorage.getItem('nickName');
    if (nickName) Join(nickName);
  }, []);

  socket.on(RECEIVE_MESSAGE.JOINED, (msg: InitJoined) => {
    console.log('joindex', msg);

    localStorage.setItem('nickName', msg.user.nickname);
    setJoinConnect(true);
    joinInfo.current = msg;
  });

  socket.on(RECEIVE_MESSAGE.ROOMS, (msg: getRooms) => {
    console.log('room msg', msg.rooms);
    setRooms(msg.rooms);
  });
  // getUsers
  const socketGetUsersHandler = useCallback((msg: Users) => {
    console.log('user msg', msg);
    setUserList(msg.users);
  }, []);
  useEffect(() => {
    socket.on(RECEIVE_MESSAGE.USERS, socketGetUsersHandler);
    return () => {
      socket.off(RECEIVE_MESSAGE.USERS, socketGetUsersHandler);
    };
  }, [socketGetUsersHandler]);

  // userJoined
  const socketUserJoinedHandler = useCallback((msg: InitJoined) => {
    console.log('socketUserJoinedHandlersdsd', msg.user);
    setUserList((prevUser) => [...prevUser, msg.user]);
  }, []);
  useEffect(() => {
    socket.on(RECEIVE_MESSAGE.USER_JOINED, socketUserJoinedHandler);
    return () => {
      socket.off(RECEIVE_MESSAGE.USER_JOINED, socketUserJoinedHandler);
    };
  }, [socketUserJoinedHandler]);

  // roomCreated
  const socketCreatedHandler = useCallback((msg: getRoom) => {
    console.log('created', msg);
    setRooms((prevRooms) => [...prevRooms, msg.room]);
  }, []);
  useEffect(() => {
    socket.on(RECEIVE_MESSAGE.ROOM_CREATED, socketCreatedHandler);
    return () => {
      socket.off(RECEIVE_MESSAGE.ROOM_CREATED, socketCreatedHandler);
    };
  }, [socketCreatedHandler]);

  // roomDistroyed
  const socketDestroyedHandler = useCallback((msg: DestroyRoomId) => {
    console.log('destroyed', msg, rooms);
    setRooms((prevRooms) => {
      const currentRooms = prevRooms.filter((room) => room.id !== msg.roomId);
      return currentRooms;
    });
  }, []);
  useEffect(() => {
    socket.on(RECEIVE_MESSAGE.ROOM_DESTROYED, socketDestroyedHandler);
    return () => {
      socket.off(RECEIVE_MESSAGE.ROOM_DESTROYED, socketDestroyedHandler);
    };
  }, [socketDestroyedHandler]);

  /** socket send **/
  const Join = (nickname: string) => {
    emit(SEND_MESSAGR.JOIN, { nickname });
  };

  const GetRooms = () => {
    emit(SEND_MESSAGR.GET_ROOMS, {});
  };

  const CreateRoom = (msg: CreateRoomType) => {
    emit(SEND_MESSAGR.CREATE_ROOM, msg);
  };

  const GetUsers = () => {
    emit(SEND_MESSAGR.GET_USERS, {});
  };
  const MoveRoom = (msg: MoveRoomType) => {
    emit(SEND_MESSAGR.MOVE_ROOM, msg);
  };

  const emit = (event: SEND_MESSAGR, msg: SendMessage) => {
    socket.emit(event, msg);
  };

  const value = {
    joinInfo: joinInfo.current,
    joinConnect,
    rooms,
    userList,
    Join,
    GetRooms,
    CreateRoom,
    GetUsers,
  };

  console.log('value', value);

  return (
    <SocketContext.Provider value={value}> {children}</SocketContext.Provider>
  );
};
