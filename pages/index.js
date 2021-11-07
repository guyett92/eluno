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
  // State
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentNFTs, setCurrentNFTs] = useState([]);

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
        const accounts = await ethereum.request({ method: "eth_accounts" });

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

  // FIXME: Convert to a promise
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
      fetch(
        `https://api.opensea.io/api/v1/assets?owner=${accounts[0]}&order_direction=desc&offset=0&limit=20`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCurrentNFTs(result);
            console.log(currentNFTs);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  // const getNFTs = async () => {
  //   try {
  //     console.log(currentAccount);
  //     fetch(
  //       `https://api.opensea.io/api/v1/assets?owner=${currentAccount}&order_direction=desc&offset=0&limit=20`
  //     )
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           console.log(result);
  //         },
  //         (err) => {
  //           console.log(err);
  //         }
  //       );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // When the components have loaded...
  useEffect(() => {
    checkIfWalletIsConnected();
    connectWalletAction();
  }, []);

  useEffect(() => {
    // getNFTs();
  }, []);

  return (
    <Layout pageTitle="⭐ Eluno">
      <Header />
      {/* <img src={currentNFTs[0]["image_original_url"]} alt="nft" /> */}
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
