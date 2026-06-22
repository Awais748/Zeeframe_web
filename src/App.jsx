import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Work from "./pages/Work";
import Insight from "./pages/Insights";
import Footer from "./Components/layout/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/insights" element={<Insight />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
