import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './screens/HomePage/HomePage';
import LandingPage from './screens/LandingPage/LandingPage';
import { Navigate } from 'react-router-dom';
import EditTask from './screens/EditTask/EditTask';

const App = () => {
  const isAuth = Boolean(useSelector(state => state.authData.userInfo));
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <HomePage/> : <LandingPage/>}/>
          <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to = "/" /> }/>
          <Route path="/edit-task" element={isAuth ? <EditTask/> : <Navigate to = "/" /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
