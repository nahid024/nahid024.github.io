import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import MediaIcon from "../components/MediaIcon";
import Navbar from "../components/Navbar";
import ProfessionalExperience from "../components/ProfessionalExperience";
import Publications from "../components/Publications";
const HomePage = () => {
  return (
    <div style={{padding:"0 20px"}}>
      <Navbar />
      <HeroBanner/>
      <MediaIcon />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Publications />
      <Divider />
      <ProfessionalExperience />
      <Footer/>
    </div>
  );
};

export default HomePage;
