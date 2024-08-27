import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/admin-dashboard/sidebar";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin-dashboard" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
