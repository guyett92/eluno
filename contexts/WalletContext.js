import React, { createContext, useState, useContext } from "react";

export const WalletContext = createContext(null);

export const WalletContextWrapper = (props) => {
  const [store, setStore] = useState({
    walletConnected: false,
    nfts: [],
    connectedWallets: {},
  });
  const [actions, setActions] = useState({
    addNft: (NFT) => setStore({ ...store, nfts: nfts.push(NFT) }),
    fetchNfts: async (walletId) => {
      await setStore({ ...store, nfts: nfts });
    },
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
    <WalletContext.Provider value={{ store, actions }}>
      {props.children}
    </WalletContext.Provider>
  );
};
