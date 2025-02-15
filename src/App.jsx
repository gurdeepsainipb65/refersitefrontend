import Navbar from "./component/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
