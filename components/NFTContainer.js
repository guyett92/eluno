import React, { useEffect, useContext, useState } from "react";
import ShopCard from "../components/ShopCard";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { WalletContext } from "../contexts/WalletContext";
import { AppContext } from "../contexts/ContextProvider";
import axios from "axios";

const customNftLineId = "Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzQxNjQ4ODE5NDA0OTkzMD9jaGVja291dD0xZjZlMjg1ZWI3MGM0MWFkZTMyNTk3MDJlMzFjZTIyZg==" // NFT listItem ID
const customNftVariantId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTY0ODgxOTQwNDk5Mw=="; // NFT variant ID

const NFTContainer = ({ id, imgSrc, name, description }) => {
  const [nfts, setNfts] = useState({});
  const [nftsAreLoading, setNftsAreLoading] = useState(true);

  const walletContext = useContext(WalletContext);
  const context = useContext(AppContext);

  useEffect(() => {
    const fetchNftByOwner = async () => {
      const { data } = await axios.get(
        // TODO: Once OpenSea gives me an API key, change to OpenSea
        // https://ethereum-api.rarible.org/v0.1/doc#operation/getNftItemById
        `https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=${walletContext.store.connectedWallets.metamask}`
      );
  
      setNftsAreLoading(false);
  
      let fetchedItems = data.items.map((item) => {
        return {
          id: item.id,
          name: item.meta.name,
          imageUrl: item.meta.image?.url.BIG,
          description: item.meta.description,
          contract: item.contract,
        };
      });
      setNfts(fetchedItems);
    };
    if (walletContext.store.connectedWallets?.metamask) {
      fetchNftByOwner();
    }
  }, [walletContext.store.connectedWallets.metamask]);

  return (
    !nftsAreLoading && (
      nfts && nfts.length > 0 ? 
        nfts.map((nft) => {
          if (nft.imageUrl) {
            return (
              <Col className="center" key={nft.id}>
                <ShopCard 
                  nftId={nft.id}
                  shopifyId={customNftVariantId}
                  lineItemId={customNftLineId}
                  walletAddress={localStorage.getItem("address")}
                  imgSrc={nft?.imageUrl}
                  name={nft.name}
                  price={'349.00'}
                  checkoutId={context.store.checkout.id}
                />
              </Col>
            )
          }
        }) :
        <></>
    )                      
  );
};

export default NFTContainer;
