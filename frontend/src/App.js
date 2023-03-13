import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Profil from './pages/Profil';
import Ads from './pages/Ads';
import Chat from './pages/Chat';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {

  const { user } = useAuthContext();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={user ? <Shop /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/login' />} />
        <Route path='/about' element={<About />} />
        <Route path='/profil' element={user ? <Profil /> : <Navigate to='/login' />} />
        <Route path='/ads' element={user ? <Ads /> : <Navigate to='/login' />} />
        <Route path='/chat' element={user ? <Chat /> : <Navigate to='/login' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
