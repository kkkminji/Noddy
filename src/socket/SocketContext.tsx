import {
  FC,
  PropsWithChildren,
  createContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import socketio from 'socket.io-client';
import {
  User,
  ContextType,
  SendMessage,
  getRooms,
  getRoom,
  RoomsList,
} from './socket.type';
import { SEND_MESSAGR, RECEIVE_MESSAGE } from '../common/common.enum';

const ENDPOINT = 'wss://wrtc-study.ijanus.kr';
const socket = socketio(ENDPOINT);

const defaultContextValue: ContextType = {
  users: [],
  // joinConnect: false,
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

  // const rooms = useRef<RoomsList[]>([]);

  // const [joinConnect, setJoinConnect] = useState<boolean>(false);
  const [rooms, setRooms] = useState<RoomsList[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect');
      GetRooms();
    });

    socket.on(RECEIVE_MESSAGE.JOINED, (msg: User[]) => {
      // setJoinConnect(true);
      users.current = msg;
    });

    socket.on(RECEIVE_MESSAGE.ROOMS, (msg: getRooms) => {
      console.log('room msg', msg.rooms);
      setRooms(msg.rooms);
      // rooms.current = msg.rooms;

      // console.log(rooms.current);
    });

    socket.on(RECEIVE_MESSAGE.ROOM_CREATED, () => text);

    socket.on(RECEIVE_MESSAGE.ROOM_DESTROYED, (msg) => {
      console.log('destroyed', msg);
    });
  }, []);

  const text = useCallback(
    (msg: any) => {
      const newRoom: RoomsList[] = [...rooms, msg.rooms];

      console.log('newRoom', newRoom);

      setRooms(newRoom);
    },
    [rooms]
  );

  const test = (msg: any) => {
    const newRoom: RoomsList[] = [...rooms, msg];

    console.log('newRoom', newRoom);

    setRooms(newRoom);
  };

  const Join = (nickname: string) => {
    emit(SEND_MESSAGR.JOIN, { nickname });
  };

  const GetRooms = () => {
    emit(SEND_MESSAGR.GET_ROOMS, {});
  };

  // SEND
  const emit = (event: SEND_MESSAGR, msg: SendMessage) => {
    socket.emit(event, msg);
  };

  const value = {
    users: users.current,
    // joinConnect,
    // rooms: rooms.current,
    rooms,
    Join,
    GetRooms,
  };

  console.log('value', value);

  return (
    <SocketContext.Provider value={value}> {children}</SocketContext.Provider>
  );
};

// const { test: Consumer } = SocketContext;

export const Consumer = SocketContext.Consumer;
