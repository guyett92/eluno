import React, { useContext } from "react";
import { AppContext } from "../contexts/ContextProvider";

const ClearCartButton = () => {
  const context = useContext(AppContext);

  const clearCart = async () => {
    await context.actions.createCheckout();
    localStorage.setItem("checkoutId", null);
  }
  
  return (
    <button 
      className="clear-cart-btn btn btn-secondary" 
      onClick={(e) => clearCart(e)}>Clear Cart
    </button>
  );
};

export default ClearCartButton;
