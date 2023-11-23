import styled from 'styled-components';

export const ModalGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  .show {
    display: block;
  }
`;

export const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 50%;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
`;
