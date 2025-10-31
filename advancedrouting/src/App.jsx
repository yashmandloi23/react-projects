import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cources from "./pages/Cources";
import CourseDetail from "./pages/CourseDetail";
import Kids from "./pages/Kids";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Men from "./pages/Men";

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cources" element={<Cources />}></Route>
          <Route path="/Kids" element={<Kids />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/cources/:id" element={<CourseDetail />} />
          <Route path="/Product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
