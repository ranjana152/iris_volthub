// import { useState } from 'react'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmationPage from './pages/ConfirmationPage';
import MyBookings from './pages/MyBookings';
// import ConfirmationPage from './sample/Confirmation';
// import MyBookings from './sample/MyBookings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfirmationPage />} />
        <Route path="/MyBookings" element={<MyBookings/>} />
      </Routes>
    </Router>
  );
};

export default App;
