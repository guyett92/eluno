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
  });

  const [actions, setActions] = useState({
    // TODO: Separate this from fetchAllProducts
    createCheckout: async () => {
      try {
        const checkout = await client.checkout.create();
        setStore({ ...store, checkout: checkout });
      } catch (err) {
        console.log(err);
      }
    },
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
      console.log(store);
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
  });

  return (
    <AppContext.Provider value={{ store, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
