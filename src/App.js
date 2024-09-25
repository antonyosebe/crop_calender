import Header from "./components/Header";
import CropCalender from "./components/cropCalender";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<CropCalender />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
