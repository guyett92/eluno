import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Opener from "../components/Opener";
import Header from "../components/Header";
import NewFooter from "../components/NewFooter";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10000);
  }, []);

  return (
    <Layout pageTitle="eluno ⭐">
      {/* {isLoaded && <Header />} */}
      <Opener />
      <FAQ />
      {/* <hr className="index-line" /> */}
      {/* <Footer /> */}
      <NewFooter />
    </Layout>
  );
};
export default Index;
