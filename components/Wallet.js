import React, { useState, useContext } from "react";
import { AppContext } from "../contexts/ContextProvider";
import OpenseaValidation from "../util/OpenseaValidation";

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
        // alert("No wallet detected");
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
        // alert("Get MetaMask!");
        return;
      }
      // Request access
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      context.actions.connectWallet(true, accounts[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {!context.store.walletConnected ? (
        <div className={`btn`}>
          <a
            className="btn wallet-button"
            role="button"
            onClick={() => {
              checkIfWalletIsConnected();
              connectWalletAction();
            }}
          >
            Connect Wallet
          </a>
        </div>
      ) : (
        <div className="truncate white">
          {context.store.connectedWallets?.metamask}
        </div>
      )}
    </>
  );
};

export default Wallet;
