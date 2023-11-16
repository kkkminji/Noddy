import {
  ChangeEvent,
  useContext,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react';
import { SocketContext } from '../../socket/SocketContext';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Title, Input, Button } from './Styled';
import { Icon } from '../../components/icon/Sreach';

export const Login = () => {
  const naviggate = useNavigate();
  const value = useContext(SocketContext);
  const { Join, joinConnect } = value;
  const nickName = useRef<string>('');

  useEffect(() => {
    if (joinConnect) naviggate('/home');
  }, [joinConnect]);

  const ChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    nickName.current = e.target.value;
  };
  const ClickHandler = () => {
    HandlerJoin();
  };
  const Enter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      HandlerJoin();
    }
  };
  const HandlerJoin = () => {
    if (!nickName.current) alert('닉네임 입력하삼');
    Join(nickName.current);
  };

  return (
    <Container>
      <div>
        <Title data-content='NODDY'>NODDY</Title>
        <Form>
          <Input
            placeholder='닉네임'
            onChange={ChangeNickName}
            onKeyDown={Enter}
          />
          <Button onClick={ClickHandler}>
            <Icon />
          </Button>
        </Form>
      </div>
    </Container>
  );
};
