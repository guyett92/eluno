import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../contexts/ContextProvider";

const NFT = ({
  id,
  imgSrc,
  name,
  description,
  neededImageUrl,
  walletAddress,
}) => {
  const [isLoaded, sertIsLoaded] = useState(false);
  const context = useContext(AppContext);

  const onLoad = () => {
    sertIsLoaded(true);
  };

  return (
    <div>
      <img
        style={{
          display: isLoaded ? "block" : "none",
          margin: "1rem auto",
        }}
        onLoad={onLoad}
        onClick={() => {
          context.actions.updateOrderInfo(
            neededImageUrl,
            id,
            name,
            walletAddress
          );
        }}
        src={imgSrc}
        className="image-container"
      />
      <div>
        <h1 className="center">{name}</h1>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default NFT;
