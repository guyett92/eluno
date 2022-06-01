import React, { createContext, useState, useContext } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "9170dc05e5361ceb52efd36bc1c24332",
  domain: "eluno-io.myshopify.com",
  // might be graphql.myshopify.com
});

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
  const context = useContext(AppContext);

  const [store, setStore] = useState({
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    orderInfo: {
      nftAddress: "",
      nftName: "",
    },
  });

  const [actions, setActions] = useState({
    // TODO: Separate this from fetchAllProducts
    // createCheckout: async () => {
    //   try {
    //     setStore({ ...store, checkout: await client.checkout.create() });
    //     console.log(store.checkout);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    addItemToCart: async (variantId, quantity) => {
      const lineItemsToAdd = [
        {
          variantId,
          quantity: parseInt(quantity, 10),
        },
      ];
      console.log(store.checkout);
      const checkout = await client.checkout.addLineItems(
        store.checkout.id,
        lineItemsToAdd
      );
      setStore({ ...store, checkout: checkout });
    },
    fetchAllProducts: async () => {
      const products = await client.product.fetchAll();
      const checkout = await client.checkout.create();
      setStore({ ...store, products: products, checkout: checkout });
    },
    fetchProductWithId: async (id) => {
      const product = await client.product.fetch(id);
      setStore({ ...store, product: product });
    },
    closeCart: () => {
      setStore({ ...store, isCartOpen: false });
    },
    openCart: () => {
      setStore({ ...store, isCartOpen: true });
    },
    updateOrderInfo: (nftAddress, nftName, nftTokenId, walletAddress) => {
      setStore({
        ...store,
        orderInfo: {
          nftAddress: nftAddress,
          nftName: nftName,
          nftTokenId: nftTokenId,
          walletAddress: walletAddress,
        },
      });
    },
  });

  return (
    <AppContext.Provider value={{ store, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
