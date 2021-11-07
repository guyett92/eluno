import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is eluno?",
      content: `Hand made, one of one, premium gear based on an NFT in your unique collection. You are the only one with this NFT and you should be the only one who can wear it on an exclusive and premium hoodie or tee.`,
    },
    {
      title: "How does it work?",
      content:
        "It’s easy. Connect your wallet, choose your payment method, and ship! We’ll pull out the needle and thread and begin making it for you.",
    },
    {
      title: "Can I use any NFT in my wallet?",
      content: `Any NFT that is part of a verified collection on OpenSea (https://opensea.io) can be used. We ensure authenticity and protect the true owner this way. We’d hate for someone to upload a clone of your artwork.`,
    },
    {
      title: "How long does it take?",
      content:
        "We are hand making every item and sending it through rigorous quality checks. Speed is important to us, but quality ranks at the very top.",
    },
    {
      title: "Where do you ship?",
      content:
        "Shipping is covered in the USA. Please choose a shipping location that you feel is safe and secure. In some cases, it might make sense to send your order to a PO Box or other secure locations if you are concerned about privacy.  We respect your privacy by keeping all data private in our system.",
    },
    {
      title: "Is my NFT safe?",
      content:
        "Our tech is set up to do only 2 things, verification of ownership and accept payment for the order. We can only view that the NFT you select is in your wallet. ",
    },
    {
      title: "Can I get more than one?",
      content:
        "We live and breathe quality over quantity. We’ve hand selected materials, production facilities, tech and fulfillment. Eluno only builds one at a time and we shy away from large orders. We typically don’t make gear for resale at stores or boutiques.",
    },
    {
      title: "How can I get 10?!",
      content: "Sorry, you cant. ☹️",
    },
    {
      title: "What if it doesn't fit?",
      content:
        "If you do feel that this piece is not the perfect fit or feel, send it back to us within 30 days and we can exchange it for a brand new item. The previous item will be destroyed before shipping you a new one. There can only be 1 eluno.",
    },
    {
      title: "What if I sell my NFT?",
      content: `Nice! We hope you made a healthy profit! Did you include your gear in the deal?${(
        <br />
      )}This does unlock the ability for the next owner to login and place an order. Unfortunately, there will now be 2 items in the physical world. Time to frame your old eluno.`,
    },
    {
      title: "How can I pay?",
      content:
        "We accept fiat currency in the form of debit/credit and also accept BTC, ETH, DOGE, DAI, and USDC. Yes, we accept DOGE.",
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
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

const FAQ = () => {
  return (
    <section className="section faq-section">
      <Faq data={data} styles={faqStyles} config={config} />
    </section>
  );
};

export default FAQ;
