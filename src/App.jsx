import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useServicesStore from "./store/store.js";
import Navbar from "./Components/layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import ServicesPage from "./pages/services/ServicesPage";
import Work from "./pages/Work/Work.jsx";
import Insight from "./pages/Insight/Insights.jsx";
import Footer from "./Components/layout/footer/Footer";
import ScrollToTop from "./Components/Scrolltop";
import ServiceMegaPage from "./pages/services/ServiceMegaPages.jsx";

function App() {
  const fetchData = useServicesStore((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceMegaPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/insights" element={<Insight />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
