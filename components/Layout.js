import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { AppContext } from "../contexts/ContextProvider";
import LoadingIndicator from "../components/LoadingIndicator";

const Layout = (props) => {
  const context = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        // alert("No wallet detected");
        setIsLoading(false);
        return;
      } else {
        console.log("We have the ethereum object:", ethereum);
        // Let's get the accounts
        const accounts = await ethereum.request({ method: "eth_accounts" });

        // Get the first account
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Authorized account found:", account);
          context.actions.connectWallet(true, accounts[0]);
          setIsLoading(false);
        } else {
          console.log("No authorized account found.");
          setIsLoading(false);
        }
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Exclusive, high quality articles of clothing to showcase your NFT collection. Be one with your NFT."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>{isLoading ? <LoadingIndicator /> : props.children}</div>
    </div>
  );
};
export default Layout;
