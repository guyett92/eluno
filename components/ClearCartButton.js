import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/ContextProvider";

const ClearCartButton = () => {
  const [lineItemCount, setlineItemCount] = useState("");
  const context = useContext(AppContext);

  useEffect(() => {
    if (context.store.checkout.lineItems) {
      setlineItemCount(context.store.checkout.lineItems.length);
    }
  }, [context.store])


  const clearCart = async () => {
    await context.actions.createCheckout();
    localStorage.setItem("checkoutId", null);
  }
  
  return (
    <>
      {lineItemCount > 0 && 
        <button 
          className="clear-cart-btn btn btn-secondary" 
          onClick={(e) => clearCart(e)}>Clear Cart
        </button>
      }
    </>
  );
};

export default ClearCartButton;
