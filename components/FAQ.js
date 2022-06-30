import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  // title: "FAQ",
  rows: [
    {
      title: "What is eluno?",
      content: `One of one custom NFT apparel. We hand make every piece of premium gear based on the NFTs in your collection. You are the only one with a unique BAYC, Azuki, Noun, or Punk — you should be the only one who can wear it.`,
    },
    {
      title: "How does it work?",
      content:
        "It’s easy. Connect your wallet, choose an NFT, and select payment method. Once we close the drop, we’ll gather shipping info and go into production! ",
    },
    {
      title: "Why drops?",
      content:
        "We make everything by hand in small batches. We are obsessed with quality and we want to control every step of production. ",
    },
    {
      title: "When will I receive my order?",
      content:
        "Once the drop sells out we will go into production! At that point, it will take around 30-45 days to hand sew and print every hoodie. ",
    },
    {
      title: "Can I use any NFT in my wallet?",
      content: (
        <>
          <p>
            Sure thing! Anything you want to wear proudly. As long as you own
            the NFT. Before going into production, we will verify the legitimacy
            of every NFT.
          </p>
          <p>There will be no refunds for stolen, cloned or fake artwork. </p>
          <p>
            A few ways to tell if it’s legit: It was minted from a verified
            artist or project, it was purchased from a major marketplace:
            Opensea, LooksRare, etc.
          </p>
        </>
      ),
    },
    {
      title: "Where do you ship?",
      content: "We cover shipping in the USA. For now.",
    },
    {
      title: "My NFT is safe, right?",
      content:
        "Our tech is set up to do only 2 things: verification of ownership and accepting payment for the order. We can only view that the NFT you select is in your wallet.",
    },
    {
      title: "Can I get more than one?",
      content: (
        <>
          <p>We like our gear rare like your NFT and you can only get one. </p>
          <p>
            Need more or want something custom? Let’s chat:{" "}
            <a className="faq-link" href="mailto:hello@eluno.io">
              hello@eluno.io
            </a>
          </p>
        </>
      ),
    },
    {
      title: "How does sizing work?",
      content:
        "Eluno is built to be unisex and meant to fit in line with current trends.",
    },
    {
      title: "Returns and Exchanges",
      content: `Due to the unique nature of our product we are unable to accept returns. In fact, we can’t have anyone wearing your ape on unless they’ve purchased the NFT from you. But, if you’re not proud to wear it, we’d love to work with you to help make adjustments.`,
    },
    {
      title: "How long will it last?",
      content:
        "Eluno is designed to last for 10+ years. If it does need a repair and you’re still holding the NFT, send it back and we’ll repair it for free!",
    },
    {
      title: "What if I sell my NFT before the drop closes?",
      content:
        "Nice! We hope you made a healthy profit! You’ll need to select a new NFT to feature on your eluno.",
    },
    {
      title: "How can I pay?",
      content:
        "We accept BTC, ETH, DOGE, DAI, and USDC. Yes, we accept DOGE. We can also accept fiat currency in the form of debit/credit.",
    },
    {
      title: "How does sizing work?",
      content: (
        <>
          Eluno is built to be unisex and meant to fit in line with current
          trends. <i>All models are wearing size L</i>.
        </>
      ),
    },
    {
      title: "How much does the hoodie cost?",
      content: "$349 USD",
    },
  ],
};

const faqStyles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "#6c757d",
  arrowColor: "white",
  transitionDuration: "0.75s",
  rowContentPaddingBottom: "15px",
  rowContentColor: "white",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

const FAQ = () => {
  return (
    <section className="section faq-section" id="faq">
      <h1 className="title most-titles text-white">faq</h1>
      <Faq data={data} styles={faqStyles} config={config} />
    </section>
  );
};

export default FAQ;
