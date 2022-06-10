import React, { useState, useContext } from "react";
import { AppContext } from "../contexts/ContextProvider";

const ShopCard = ({ nftId, shopifyId, lineItemId, walletAddress, imgSrc, name, price, checkoutId }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const context = useContext(AppContext);
	const onLoad = () => {
    setIsLoaded(true);
  };

	return (
		<div className="shop-card">
			<h1 className="center">{name}</h1>
			<img
				style={{
				display: isLoaded ? "block" : "none",
				margin: "1rem auto",
				}}
				onLoad={onLoad}
				src={imgSrc}
				className="image-container"
			/>
		</div>
	)
}

export default ShopCard;