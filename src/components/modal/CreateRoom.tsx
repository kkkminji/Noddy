import { ChangeEvent, useContext, useState } from 'react';
import { ModalGrid, Body } from './Styled';
import { SocketContext } from '../../socket/SocketContext';
import { TYPE } from '../../common/common.enum';
import { CreateRoomType } from '../../socket/socket.type';
import { PropsType } from '../../common/common.type';

export const CreateRoom = (openCreateRoom: PropsType) => {
  const [name, setName] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [passwd, setPasswd] = useState<string>('');
  const [limitCnt, setLimitCnt] = useState<number>(5);
  const value = useContext(SocketContext);
  const { CreateRoom } = value;

  console.log(openCreateRoom);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const secretRoom = () => {
    setChecked(!checked);
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswd(e.target.value);
  };

  const createRoom = () => {
    let param: CreateRoomType = {
      name,
      limitCnt,
    };
    if (checked) {
      param = {
        ...param,
        type: TYPE.SECRET,
        passwd,
        limitCnt,
      };
    }
    CreateRoom(param);
    // 방생성하면 비디오방으로 이동, 모달 닫기
    // openCreateRoom
  };
  return (
    <ModalGrid>
      <Body>
        <div>방만들기</div>
        <div>
          <label htmlFor='name'>이름</label>
          <input id='name' placeholder='이름' onChange={changeName}></input>
        </div>
        <div>
          <label htmlFor='type'>
            <input type='checkbox' checked={checked} onChange={secretRoom} />
            비밀방
          </label>
        </div>
        {checked && (
          <div>
            <label htmlFor='pw'>비밀번호</label>
            <input onChange={changePassword}></input>
          </div>
        )}
        <div>리밋</div>
        <button onClick={createRoom}>생성</button>
      </Body>
    </ModalGrid>
  );
};
