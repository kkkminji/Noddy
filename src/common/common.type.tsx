export interface PropsType {
  openCreateRoom: () => void;
  changeState: (state: boolean) => void;
}

export interface LobbyProps {
  changeState: (state: boolean) => void;
}
