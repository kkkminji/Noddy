import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  /* background-color: #000; */
  box-shadow: 1px 1px 3px 1px #3e3e3e;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
`;

export const GridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
  align-items: stretch;
  box-shadow: 1px 1px 3px 1px #0f40a1;
`;

export const GridItem = styled.div`
  flex-direction: column;
  width: 100%;
  box-shadow: 1px 1px 3px 1px #0f40a1;
  border-radius: 5px;
`;
