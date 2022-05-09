import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Vision from "../components/Vision";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Gear from "../components/Gear";
import Quality from "../components/Quality";
import Exclusivity from "../components/Exclusivity";
import Opener from "../components/Opener";
import Header from "../components/Header";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10000);
  }, []);

  return (
    <Layout pageTitle="eluno ⭐">
      {/* <Hero />
      <Feature />
      <Gear />
      <Vision />
      <Quality />
      <Exclusivity />
      <About />
      <Footer /> */}
      {isLoaded && <Header />}
      <Opener />
      <hr className="index-line" />
      <FAQ />
    </Layout>
  );
};
export default Index;
