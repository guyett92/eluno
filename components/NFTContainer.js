import React, { useEffect, useContext, useState } from "react";
import Pagination from "./Pagination";
import {
  Col,
  Button,
} from "reactstrap";
import { WalletContext } from "../contexts/WalletContext";
import { AppContext } from "../contexts/ContextProvider";
import axios from "axios";

const NFTContainer = () => {
  const [nfts, setNfts] = useState({});
  const [selectedNft, setSelectedNft] = useState();
  const [nftIdx, setNftIdx] = useState();
  const [nftsAreLoading, setNftsAreLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [isLoaded, setIsLoaded] = useState(false);

  const walletContext = useContext(WalletContext);
 
  useEffect(() => {
    const fetchNftByOwner = async () => {
      const { data } = await axios.get(
        // TODO: Once OpenSea gives me an API key, change to OpenSea
        // https://ethereum-api.rarible.org/v0.1/doc#operation/getNftItemById
        `https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=${walletContext.store.connectedWallets.metamask}`
      );
  
      setNftsAreLoading(false);

      let fetchedItems = data.items.filter((item) => {
        // console.log(item);
        if (item.meta) {
          item.meta.image.url.BIG
        }
      });
  
      fetchedItems = fetchedItems.map((item) => {
        return {
          id: item.id,
          name: item.meta.name,
          imageUrl: item.meta.image?.url.BIG,
          description: item.meta.description,
          contract: item.contract,
        };
      });

      // placeholder nft
      // for (let i = 0; i < 30; i++) {
      //   fetchedItems.push({
      //     id: i + 1000,
      //     name: 'random' + i,
      //     imageUrl: "http://via.placeholder.com/300",
      //     description: "desc",
      //     contract: "contract"
      //   })
      // }

      setNfts(fetchedItems);
    };
    if (walletContext.store.connectedWallets?.metamask) {
      fetchNftByOwner();
    }
  }, [walletContext.store.connectedWallets.metamask]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const onLoad = () => {
		setIsLoaded(true);
	};

  const clickNft = (nft, i) => {
    if (nftIdx === i) {
      setSelectedNft(null);
      setNftIdx(null);
    } else {
      setSelectedNft(nft);
      setNftIdx(i);
    }
  }

  const handleConfirm = () => {
    localStorage.setItem("nftData", JSON.stringify(selectedNft));
  }

  let currentNfts = [];
  if (nfts.length > 0) {
    const indexOfLastNft = currentPage * postsPerPage;
    const indexOfFirstNft = indexOfLastNft - postsPerPage;
    currentNfts = nfts.slice(indexOfFirstNft, indexOfLastNft);
  }

  return (
    !nftsAreLoading && (
      <>
        {nfts && currentNfts.length > 0 ? 
          currentNfts.map((nft, i) => {
            if (nft.imageUrl) {
              return (
                <Col
                  sm={4}
                  className="nft-card" 
                  key={i}
                  onClick={() => clickNft(nft, i)}
                  style={{ border : nftIdx === i ? "5px solid blue" : "" }}
     
                >
                  <h1 className="center">{ nft.name }</h1>
                  <div className="nft-image-container">
                    <img
                      style={{
                        display: isLoaded ? "block" : "none",
                        margin: "1rem auto",
                      }}
                      onLoad={ onLoad }
                      src={ nft?.imageUrl }
                    />
                  </div>
                </Col>
              )
            }
          }) :
          <></>
        }
        {nfts.length >= 15 && 
          <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={nfts.length} 
            paginate={paginate} 
          />    
        }
        <Button
          className="confirmButton"
          disabled={!selectedNft}
          onClick={handleConfirm}
        >
          <a href="order2">Confirm NFT</a> 
        </Button>
      </>
    )                      
  );
};

export default NFTContainer;
