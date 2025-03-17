import './App.css'
import Login_layout from './pages/login/login_layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration_layout from './pages/registration/registration_layout'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login_layout />} />
          <Route path="/register" element={<Registration_layout />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
