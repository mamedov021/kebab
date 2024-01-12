import { Route, Routes } from "react-router";
import About from "../src/pages/About";
import Beverages from "./pages/Beverages";
import Contact from "./pages/Contact_us";
import Delivery from "./pages/Delivery";

const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Beverages" element={<Beverages/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Delivery" element={<Delivery />} />
    </Routes>
  );
};

export default WebRouting;
