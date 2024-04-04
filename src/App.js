import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
import Ranking from "./components/aboutme/ranking/Ranking";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import ReactGA from "react-ga4";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
// import Zoom from 'react-reveal/Zoom';
import Toolkit from "./components/aboutme/skills/Toolkit";
import Mediumblogs from "./pages/blogs_page/Mediumblogs";
import mediumblog from "./components/blog/MediumBlog";


ReactGA.initialize('G-3J7V3EZN20');

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "https://bhavu211.github.io/", title: "Homepage" });
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />}></Route>
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} /> 
            <Route path="technicaljourney" element={<TechnicalJourney />} />
            <Route path="projectjourney" element={<ProjectJourney />} />
            <Route
              path="educationjourney"
              element={<EducationJourney />}
            ></Route>
            <Route
              path="experiencejourney"
              element={<ExperienceJourney />}
            ></Route>
            <Route path="ranking" element={<Ranking />}></Route>
            <Route path="socialmedia" element={<SocialMedia />}></Route>
            <Route path="toolkit" element={<Toolkit />}></Route>
          </Route>
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/certificatepage" element={<CertificatePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Mediumblogs />} />
          <Route path="/blogging" href={"https://bhawnamangla98.medium.com/"} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
