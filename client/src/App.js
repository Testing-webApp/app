import Header from "./components/Header";
import TrialPage from "./pages/TrialPage";
import LoginPage from "./pages/LoginPage.js";
import baseUrl from './baseUrl.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";




axios.defaults.baseURL = "http://localhost:3000";


function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<TrialPage />} />
        <Route path="/login" element={<LoginPage />} />



      </Routes>
    </Router>
  );
}

export default App;
