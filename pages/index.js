import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";
const Index = () => {
  // State
  const [currentAccount, setCurrentAccount] = useState(null);

  // Let's connect to the wallet FIXME: Add this the purchase portal only
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("No wallet detected");
        return;
      } else {
        console.log("We have the ethereum object:", ethereum);
        // Let's get the accounts
        const accounts = await ethereum.request({ method: "eth_accounts " });

        // Get the first account
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Authorized account found:", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found.");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      // Request access
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log(e);
    }
  };

  // When the components have loaded...
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <About />
      <Footer />
    </Layout>
  );
};
export default Index;
