import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreContextProvider from "./store/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Notes from "./page/Notes";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Footer from "./components/Footer";
function App() {
  return (
    <StoreContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/create" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </StoreContextProvider>
  );
}

export default App;
