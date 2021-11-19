import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Vision from "../components/Vision";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <Layout pageTitle="eluno ⭐">
      {/* <Header /> */}
      <Hero />
      <Feature />
      <Vision />
      <About />
      <FAQ />
      <Footer />
    </Layout>
  );
};
export default Index;
