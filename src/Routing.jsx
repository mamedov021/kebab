import { Route, Routes } from "react-router";
import About from "../src/pages/About";
import Beverages from "./pages/Beverages";
import Contact from "./pages/Contact_us";
import Delivery from "./pages/Delivery";
import Menu from "./pages/Menu";

const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Beverages" element={<Beverages/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  );
};

export default WebRouting;
