import { BrowserRouter } from 'react-router-dom';
import { RoutesSetup } from './routes/RoutesSetup';
import { SocketProvider } from './socket/SocketContext';
import './App.css';

function App() {
  console.log('app');

  return (
    <div className='App'>
      <SocketProvider>
        <BrowserRouter>
          <RoutesSetup />
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;
