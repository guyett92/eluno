import React, { useEffect, useContext, useState } from "react";

const NFT = ({ id, imgSrc, name, description }) => {
  const [isLoaded, sertIsLoaded] = useState(false);
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
