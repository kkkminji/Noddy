import { GridVideo, Header, VideoEl } from './Styled';

export const Video = () => {
  return (
    <GridVideo>
      <Header>들어가있는 방이름 / 총 인원수</Header>
      {/* <GridVideo> */}
      <VideoEl controls></VideoEl>
      {/* <VideoEl controls></VideoEl>
      <VideoEl controls></VideoEl>
      <VideoEl controls></VideoEl>
      <VideoEl controls></VideoEl> */}
      {/* </GridVideo> */}
    </GridVideo>
  );
};
