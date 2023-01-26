import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Booked from "./pages/booked";
import CarDetail from "./pages/car-detail";
import Cars from "./pages/cars";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index={true} element={<Cars />} />
            <Route index={false} path=":car" element={<CarDetail />} />
          </Route>
          <Route path="/booked" element={<Booked />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
