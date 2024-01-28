import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/Pages/HomePage"
import AboutUs from "../src/Pages/AboutUs"
import Academic from "../src/Pages/Academic"
import Applications from "../src/Pages/Applications"
import BecomeTutor from "../src/Pages/BecomeTutor"
import Blog from "../src/PagesBlog"
import CollEdProg from "../src/Pages/CollEdProg"
import CompSkills from "../src/Pages/CompSkills"
import ContactUs from "../src/Pages/ContactUs"
import DesignSkills from "../src/Pages/DesignSkills"
import Donate from "../src/Pages/Donate"
import InstantApp from "../src/Pages/InstantApp"
import MusicSkills from "../src/Pages/MusicSkills"
import OnlineShop from "../src/Pages/AboutUs"
import OnlineTut from "../src/Pages/OnlineTut"
import Pricing from "../src/Pages/Pricing"
import ProgSkills from "../src/Pages/ProgSkills"
import RequestTutor from "../src/Pages/RequestTutor"
import Scholarships from "../src/Pages/Scholarships"
import Team from "../src/Pages/Team"
import Technologies from "../src/Pages/Technologies"
import TestPrep from "../src/Pages/TestPrep"
import UniProg from "../src/Pages/UniProg"
import Vacancies from "../src/Pages/Vacancies"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/becomeTutor" element={<BecomeTutor />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
