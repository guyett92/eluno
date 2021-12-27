import React, { useContext } from "react";
import { AppContext } from "../contexts/ContextProvider";

const OpenseaValidation = () => {
  const context = useContext(AppContext);

  console.log(context.store.connectedWallet.metamask);

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
};

export default OpenseaValidation;
