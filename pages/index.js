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

const Index = () => {
  return (
    <Layout pageTitle="eluno ⭐">
      <Hero />
      <Feature />
      <Gear />
      <Vision />
      <Quality />
      <Exclusivity />
      <About />
      <FAQ />
      <Footer />
    </Layout>
  );
};
export default Index;
