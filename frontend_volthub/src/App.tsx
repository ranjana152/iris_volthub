import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmationPage from './pages/payment/ConfirmationPage';
import MyBookings from './pages/payment/MyBookings';
import LayoutPage from './pages/payment/LayoutPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage Component={ConfirmationPage} />} />
        <Route path="/MyBookings" element={<LayoutPage Component={MyBookings}/>} />
      </Routes>
    </Router>
  );
};

export default App;
