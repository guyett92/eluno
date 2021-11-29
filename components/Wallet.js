import React, { useState, useContext } from "react";
import { AppContext } from "../contexts/ContextProvider";

const Wallet = () => {
  // State
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentNFTs, setCurrentNFTs] = useState([]);
  const context = useContext(AppContext);

  // Let's connect to the wallet
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
      console.log(accounts[0]);
      context.actions.connectWallet(true, accounts[0]);
      console.log(context.store.walletConnected);
      console.log(context.store.connectedWallets);
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

  return (
    <div className="btn btn-container">
      <div className="border-container">
        <a
          className="btn"
          role="button"
          onClick={() => {
            checkIfWalletIsConnected();
            connectWalletAction();
          }}
        >
          Connect Wallet
        </a>
      </div>
    </div>
  );
};

export default Wallet;
