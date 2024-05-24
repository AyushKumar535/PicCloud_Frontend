import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Login from './pages/Login';
import Mainpage from './pages/Mainpage';
import Register from './pages/Register';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/main' element={<Mainpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
