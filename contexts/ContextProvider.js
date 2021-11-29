import React, { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
  const context = useContext(AppContext);

  const [store, setStore] = useState({
    walletConnected: false,
    nfts: [],
    connectedWallets: {},
  });
  const [actions, setActions] = useState({
    addNft: (NFT) => setStore({ ...store, nfts: nfts.push(NFT) }),
    connectWallet: (status, wallet) =>
      setStore({
        ...store,
        walletConnected: status,
        connectedWallets: {
          metamask: wallet,
        },
      }),
  });

  return (
    <AppContext.Provider value={{ store, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
