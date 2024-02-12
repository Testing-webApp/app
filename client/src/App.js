import Header from "./components/Header";
import TrialPage from "./pages/TrialPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import baseUrl from './pages/baseUrl.js';
import axios from "axios";

axios.defaults.baseURL = baseUrl+':3000';



function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/trial" element={<TrialPage />} />

      </Routes>
    </Router>
  );
}

export default App;
