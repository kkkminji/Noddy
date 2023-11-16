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
  User,
  ContextType,
  SendMessage,
  getRooms,
  getRoom,
  RoomsList,
  DestroyRoomId,
} from './socket.type';
import { SEND_MESSAGR, RECEIVE_MESSAGE } from '../common/common.enum';

const ENDPOINT = 'wss://wrtc-study.ijanus.kr';
const socket = socketio(ENDPOINT);

const defaultContextValue: ContextType = {
  users: [],
  joinConnect: false,
  rooms: [],
  Join: () => {},
  GetRooms: () => {},
};

export const SocketContext = createContext<ContextType>(defaultContextValue);

type ResponsiveProviderPros = {};

export const SocketProvider: FC<PropsWithChildren<ResponsiveProviderPros>> = ({
  children,
}) => {
  console.log('aa', children);

  const users = useRef<User[]>([]);

  const [joinConnect, setJoinConnect] = useState<boolean>(false);
  const [rooms, setRooms] = useState(() => {
    const initialRooms: RoomsList[] = [];
    return initialRooms;
  });

  socket.on(RECEIVE_MESSAGE.JOINED, (msg: User[]) => {
    setJoinConnect(true);
    users.current = msg;
  });

  socket.on(RECEIVE_MESSAGE.ROOMS, (msg: getRooms) => {
    console.log('room msg', msg.rooms);
    setRooms(msg.rooms);
  });

  const socketCreatedHandler = useCallback((msg: getRoom) => {
    setRooms((prevRooms) => [...prevRooms, msg.room]);
  }, []);

  useEffect(() => {
    socket.on(RECEIVE_MESSAGE.ROOM_CREATED, socketCreatedHandler);
    return () => {
      socket.off(RECEIVE_MESSAGE.ROOM_CREATED, socketCreatedHandler);
    };
  }, [socketCreatedHandler]);

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

  const Join = (nickname: string) => {
    emit(SEND_MESSAGR.JOIN, { nickname });
  };

  const GetRooms = () => {
    emit(SEND_MESSAGR.GET_ROOMS, {});
  };

  const emit = (event: SEND_MESSAGR, msg: SendMessage) => {
    socket.emit(event, msg);
  };

  const value = {
    users: users.current,
    joinConnect,
    rooms,
    Join,
    GetRooms,
  };

  console.log('value', value);

  return (
    <SocketContext.Provider value={value}> {children}</SocketContext.Provider>
  );
};
