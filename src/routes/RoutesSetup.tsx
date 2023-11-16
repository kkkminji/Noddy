import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Home } from '../pages/home/Home';
export const RoutesSetup = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  );
};
