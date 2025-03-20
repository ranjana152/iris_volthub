import './App.css'
import Login_layout from './pages/login/login_layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration_layout from './pages/registration/registration_layout'
import Dashboard_layout from './pages/dashboard/dash_layout';
import DContent_1 from './pages/dashboard/content_1';
import Slot_content2 from './pages/slotbooking/bookslots';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login_layout />} />
          <Route path="/register" element={<Registration_layout />} />
          <Route path="/dashboard" element={<Dashboard_layout Component={DContent_1} />} />
          <Route path="/slotdashboard" element={<Dashboard_layout Component={Slot_content2} />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
