import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './screens/HomePage/HomePage';
import LandingPage from './screens/LandingPage/LandingPage';
import { Navigate } from 'react-router-dom';

const App = () => {
  const isAuth = Boolean(useSelector(state => state.authData.userInfo));
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <HomePage/> : <LandingPage/>}/>
          <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to = "/" /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
