// import Header from "./components/Header";
import CropCalendar from "./components/CropCalendar";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<CropCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
