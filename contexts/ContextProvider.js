import React, { createContext, useState, useContext, useReducer } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "9170dc05e5361ceb52efd36bc1c24332",
  domain: "eluno-io.myshopify.com",
  // might be graphql.myshopify.com
});

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ALL_PRODUCTS': {
      return {
        ...state,
        products: action.products,
      }
    }

    case 'FETCH_PRODUCT': {
      return {
        ...state,
        product: action.product,
      }
    }

    case 'CREATE_CART': {
      return {
        ...state,
        checkout: action.checkout,
        isCartOpen: true,
      }
    }

    case 'OPEN_CART': {
      return {
        ...state,
        checkout: action.checkout,
        isCartOpen: true,
      }
    }

    case 'CLOSE_CART': {
      return {
        ...state,
        isCartOpen: false,
      }
    }

    case 'ADD_ITEM': {
      return {
        ...state,
        checkout: action.checkout,
      }
    }

    default:
      return state;
  }
}

export const AppContext = createContext(null);

const initState = {
  products: [],
  product: {},
  checkout: {},
  isCartOpen: false,
};

export const ContextWrapper = (props) => {
  const [store, dispatch] = useReducer(shopReducer, initState);
  const { products, product, checkout, isCartOpen } = store;

  const [actions, setActions] = useState({
    // TODO: Separate this from fetchAllProducts
    createCheckout: async () => {
      try {
        const checkout = await client.checkout.create();
        dispatch({
          type: 'CREATE_CART',
          checkout: checkout,
          isCartOpen: true,
        })
      } catch (err) {
        console.log(err);
      }
    },
    addItemToCart: async (variantId, quantity, checkoutId) => {
      const lineItemsToAdd = [
        {
          variantId,
          quantity: parseInt(quantity, 10),
        },
      ];
      const checkout = await client.checkout.addLineItems(
        checkoutId,
        lineItemsToAdd
      );
      dispatch({
        type: 'ADD_ITEM',
        checkout: checkout,
      });

      return checkout;
    },
    addNftData: async ({ nftId, shopifyId, lineItemId, walletAddress, img, checkoutId }) => {
      const oldData = {};
      oldData.key = "nftData"
      oldData.value = JSON.stringify([{
        walletAddress,
        nftId,
        imgUrl: img,
      }])

      const lineItemsToUpdate = [{ 
        id: lineItemId, 
        customAttributes:  {
          key: oldData.key,
          value: oldData.value
        }
      }]

      await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
    },
    fetchAllProducts: async () => {
      const products = await client.product.fetchAll();
      dispatch({
        type: 'FETCH_ALL_PRODUCTS',
        products: products,
      })
    },
    fetchProductWithId: async (id) => {
      const product = await client.product.fetch(id);
      dispatch({
        type: 'FETCH_PRODUCT',
        product: product,
      })
    },
    openCart: async (checkoutId) => {
      const checkout = await client.checkout.fetch(checkoutId);
      dispatch ({
        type: 'OPEN_CART',
        checkout: checkout,
      })
    },
    closeCart: () => {
      dispatch({type: 'CLOSE_CART'});
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
