import { Container, GridContainer, GridItem, Header } from './Styled';
import { RoomList } from '../../components/room/RoomList';
import { Lobby } from '../../components/lobby/Lobby';
import { Video } from '../../components/video/Video';
import { Chat } from '../../components/chat/Chat';
import { useState } from 'react';

export const Home = () => {
  // const isRoom = localStorage.getItem('state');
  // // const [state, setState] = useState<boolean>(
  // //   isRoom === null ? false : JSON.parse(isRoom)
  // // );

  const [state, setState] = useState<boolean>(false);

  const changeState = (state: boolean) => {
    // localStorage.setItem('state', state.toString());
    setState(state);
  };

  return (
    <Container>
      <Header>
        <h1>NODDY</h1>
        <h1>닉네임</h1>
      </Header>
      <GridContainer>
        {!state ? <Lobby changeState={changeState} /> : <Video />}
        <GridItem>
          <RoomList></RoomList>
          {state && <Chat />}
        </GridItem>
      </GridContainer>
    </Container>
  );
};
