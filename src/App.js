import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Board from "./pages/Board";
import Leaders from "./pages/Leaders";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
import LifeAtWBTL from "./pages/LifeAtWBTL";
import JoinUs from "./pages/JoinUs";
import JoiningDetails from './pages/JoiningDetails'; 
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/init.css";
import "./assets/css/svg-style.css";
import "./assets/css/ps-style.css";
import "./assets/css/svg-device.css";
import ScrollToTop from "./feature/ScrollToTop"; // Adjust path as needed
import usePageTitle from './Hook/usePageTitle';

function App() {

  usePageTitle();

  return (

    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="board" element={<Board />} />
        <Route path="leaders" element={<Leaders />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="life_at_wbtl" element={<LifeAtWBTL />} />
        <Route path="joinus" element={<JoinUs />} />
        <Route path="joinus/:id" element={<JoiningDetails />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
