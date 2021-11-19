import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";

const Order = () => {
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
    <Layout pageTitle="eluno | Order">
      <Header />
      <section className="section">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="center">
              <h1>Hoodie</h1>
              <div className="image-container-no-overflow">
                <img src="/images/monstera.jpg" alt="" />
              </div>
              <div>
                <a
                  class="buy-with-crypto"
                  href="https://commerce.coinbase.com/checkout/20dc7f60-3272-406e-a092-3e2c4f6f1fca"
                >
                  Buy with Crypto
                </a>
                <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
              </div>
            </Col>
            <Col className="center">
              <h1>Shirt</h1>
              <div className="image-container-no-overflow">
                <img src="/images/eva.jpg" alt="" />
              </div>
              <div>
                <a
                  className="buy-with-crypto"
                  href="https://commerce.coinbase.com/checkout/4220b634-dc1b-48fc-ad86-38c540823d24"
                >
                  Buy with Crypto
                </a>
                <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default Order;
