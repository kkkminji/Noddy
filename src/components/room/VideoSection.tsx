import styled from 'styled-components';

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

export const VideoSection = () => {
  return (
    <GridVideo>
      <Video controls></Video>
    </GridVideo>
  );
};
