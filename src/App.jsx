import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"
import Academic from "./Pages/Academic"
import Applications from "./Pages/Applications"
import BecomeTutor from "./Pages/BecomeTutor"
import Blog from "./Pages/Blog"
import CollEdProg from "./Pages/CollEdProg"
import CompSkills from "./Pages/CompSkills"
import ContactUs from "./Pages/ContactUs"
import DesignSkills from "./Pages/DesignSkills"
import Donate from "./Pages/Donate"
import InstantApp from "./Pages/InstantApp"
import MusicSkills from "./Pages/MusicSkills"
import OnlineShop from "./Pages/AboutUs"
import OnlineTut from "./Pages/OnlineTut"
import Pricing from "./Pages/Pricing"
import ProgSkills from "./Pages/ProgSkills"
import RequestTutor from "./Pages/RequestTutor"
import Scholarships from "./Pages/Scholarships"
import Stakeholders from "./Pages/Stakeholders"
import SkillDev from "./Pages/SkillDev"
import Team from "./Pages/Team"
import Technologies from "./Pages/Technologies"
import TestPrep from "./Pages/TestPrep"
import UniProg from "./Pages/UniProg"
import Vacancies from "./Pages/Vacancies"
import Footer from "./Components/Footer"
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/becometutor" element={<BecomeTutor />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/colledprog" element={<CollEdProg />} />
        <Route path="/compskills" element={<CompSkills />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/designskills" element={<DesignSkills />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/instantapp" element={<InstantApp />} />
        <Route path="/musicskills" element={<MusicSkills />} />
        <Route path="/onlineshop" element={<OnlineShop />} />
        <Route path="/onlintut" element={<OnlineTut />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/progskills" element={<ProgSkills />} />
        <Route path="/requesttutor" element={<RequestTutor />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/skilldev" element={<SkillDev />} />
        <Route path="/stakeholders" element={<Stakeholders />} />
        <Route path="/team" element={<Team />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/testprep" element={<TestPrep />} />
        <Route path="/uniprog" element={<UniProg />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
