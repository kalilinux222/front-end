import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/admin-dashboard/sidebar";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div>
      <Router>
        <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
          <Route path="/admin-dashboard" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
