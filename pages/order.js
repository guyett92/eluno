import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import NFTContainer from "../components/NFTContainer";
import ShopifyCarousel from "../components/ShopifyCarousel";
import { Container, Row, Col, Button } from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";
import { WalletContext } from "../contexts/WalletContext";
import axios from "axios";

// const customNftShopifyId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcyNTMxOTMzNTk1NTM="; // NFT product ID

// TODO: Setup .env
const airtableApi = "keyjWXvJitkpQrk0V";

const Order = () => {
  const [confirmedNft, setConfirmedNft] = useState();
  const context = useContext(AppContext);
  const walletContext = useContext(WalletContext);

  // TODO: Capture wallet address, contractId, Image, and nftId as part of the order process
  // TODO: Capture NFT contract and verify it as part of the order process

  const checkNftContracts = async () => {
    // TODO: Check if NFT is part of a contract that we approve. If not, then have them request it in a new process
  };

  const addNftToPurchaseList = async () => {
    // TODO: Add NFT to the database we are using to store if they have purchased that NFT before
  };

  const checkNftForRepurchase = async () => {
    //TODO: Check if NFT has been purchased before - we might not need this. Not a worry right now
    const { data } = await axios.get(
      // https://airtable.com/appaR4vhmUf9FPP3m/api/docs#curl/table:table%201:list
      `https://api.airtable.com/v0/appaR4vhmUf9FPP3m/Table%201?api_key=${airtableApi}`
    );
    // console.log(data.records);
  };

  const captureData = () => {
    console.log("test");
  };

  const clearCart = async (e) => {
    // e.preventDefault();
    await context.actions.createCheckout();
    localStorage.setItem("checkoutId", null);
    setConfirmedNft(null);
  }

  useEffect(() => {
    // TODO: Create cart as well without breaking this
    context.actions.fetchAllProducts();
    if (!localStorage.getItem("checkoutId")) {
      context.actions.createCheckout();
    } else {
      context.actions.openCart(localStorage.getItem("checkoutId"));
    }
  }, []);

  useEffect(() => {
    // console.log('CONTEXT', context);
    // console.log('LINE ITEMS', context.store.checkout.lineItems);
    // if (!localStorage.getItem("checkoutId") && context.store.checkout.id) {
      localStorage.setItem("checkoutId", context.store.checkout.id);
    // }
  }, [context]);

  return (
    <Layout pageTitle="eluno | Order">
      <Header />
        <section className="section">
        <Container>
          <button className="clear-cart-btn" onClick={(e) => clearCart(e)}>Clear Cart</button>
          {confirmedNft ? 
            <Row className="product-container justify-content-md-center white-text">
              <ShopifyCarousel confirmedNft={confirmedNft} />
            </Row> 
            :
            <Row className="nft-container justify-content-md-center white-text">
              <h1 className="center">Choose a NFT</h1>
              <NFTContainer setConfirmedNft={setConfirmedNft} />
            </Row>
          }
        </Container>
      </section>
      {!walletContext.store.connectedWallets.metamask && (
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <h1>Please connect your wallet to begin. 🚀🌕</h1>
        </div>
      )}
    </Layout>
  );
};

export default Order;

// export async function getServerSideProps() {
//   const products = await client.product.fetchAll(); // Fetch product
//   const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
//   const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any
//   return {
//     props: {
//       infos: JSON.parse(JSON.stringify(infos)),
//       policies: JSON.parse(JSON.stringify(policies)),
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// }
