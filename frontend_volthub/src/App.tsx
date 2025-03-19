import './App.css'
import Login_layout from './pages/login/login_layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration_layout from './pages/registration/registration_layout'
import Dashboard_layout from './pages/dashboard/dash_layout';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login_layout />} />
          <Route path="/register" element={<Registration_layout />} />
          <Route path="/dashboard" element={<Dashboard_layout />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
