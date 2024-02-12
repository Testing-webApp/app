import Header from "./components/Header";
import TrialPage from "./pages/TrialPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<TrialPage />} />

      </Routes>
    </Router>
  );
}

export default App;
