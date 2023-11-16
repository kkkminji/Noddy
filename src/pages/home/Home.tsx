import { Container, GridContainer, GridItem, Header } from './Styled';
import { RoomList } from '../../components/RoomList';
import { Lobby } from '../../components/lobby/Lobby';

export const Home = () => {
  return (
    <Container>
      <Header>
        <h1>NODDY</h1>
        <h1>닉네임</h1>
      </Header>
      <GridContainer>
        <Lobby />
        {/* <div>Section (lobby, play) section 으로 생성 lobby, play</div> */}
        <GridItem>
          <RoomList></RoomList>
        </GridItem>
      </GridContainer>
    </Container>
  );
};
