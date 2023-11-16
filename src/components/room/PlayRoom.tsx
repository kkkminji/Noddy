import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  align-items: stretch;
  height: 100%;
  margin: 30px;
`;

const GridVideo = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Video = styled.video`
  float: left;
  width: calc(100% / 3 - 20px);
  margin: 0 10px;
`;

const GridItem = styled.div`
  flex-direction: column;
  width: 100%;
`;

const GridRoom = styled.div`
  width: 100%;
  height: 50%;
`;

export const PlayRoom = () => {
  return (
    <GridContainer>
      <GridVideo>
        {/**
   * 2개일 경우
   *  <video width={'50%'} height={'100%'} controls></video>
        <video width={'50%'} height={'100%'} controls></video>
   * 3개 일 경우
   *         <video width={'50%'} height={'50%'} controls></video>
        <video width={'50%'} height={'50%'} controls></video>
        <video width={'100%'} height={'50%'} controls></video>
        4개일 경우
              <video width={'50%'} height={'50%'} controls></video>
        <video width={'50%'} height={'50%'} controls></video>
        <video width={'50%'} height={'50%'} controls></video>
        <video width={'50%'} height={'50%'} controls></video>
        5개일 경우
   */}
        {/* <video width={'50%'} height={'50%'} controls></video>
        <video width={'50%'} height={'50%'} controls></video>
        <video width={'calc(100% / 3)'} height={'50%'} controls></video>
        <video width={'calc(100% / 3)'} height={'50%'} controls></video>
        <video width={'calc(100% / 3)'} height={'50%'} controls></video> */}
        <Video controls></Video>
      </GridVideo>
      <GridItem>
        <GridRoom>
          <input type='text' />
          <ul>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
          </ul>
        </GridRoom>
        <GridRoom>
          <div>
            <div>
              <ul>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
              </ul>
            </div>
            <div>
              <input></input>
              <button>전송</button>
            </div>
          </div>
        </GridRoom>
      </GridItem>
    </GridContainer>
  );
};
