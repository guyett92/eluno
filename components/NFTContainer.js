import React, { useEffect, useContext, useState } from "react";
import Pagination from "./Pagination";
import { Col, Button } from "reactstrap";
import { WalletContext } from "../contexts/WalletContext";
import { AppContext } from "../contexts/ContextProvider";
import axios from "axios";
import { MdApi } from "react-icons/md";

const NFTContainer = ({ setNftData }) => {
  const [nfts, setNfts] = useState({});
  const [nftIdx, setNftIdx] = useState();
  const [selectedNft, setSelectedNft] = useState();
  const [nftsAreLoading, setNftsAreLoading] = useState(true);
  ``;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [isLoaded, setIsLoaded] = useState(false);

  const walletContext = useContext(WalletContext);

  useEffect(() => {
    const fetchNftByOwner = async () => {
      console.log(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY);
      const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTs/`;
      const { data } = await axios.get(
        // TODO: Once OpenSea gives me an API key, change to OpenSea
        // https://ethereum-api.rarible.org/v0.1/doc#operation/getNftItemById
        // `https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=${walletContext.store.connectedWallets.metamask}`
        `${baseURL}?owner=${walletContext.store.connectedWallets.metamask}`
      );

      setNftsAreLoading(false);
      console.log("DATA", data);
      let fetchedItems = data.ownedNfts.filter((item) => {
        if (JSON.stringify(item.metadata) !== "{}" || !item.metadata.image) {
          return true;
        }
        return false;
      });

      fetchedItems = fetchedItems.map((item) => {
        return {
          id: parseInt(item.id.tokenId, 16),
          name: item.title,
          imageUrl: item.metadata.image?.replace(
            "ipfs://",
            "https://ipfs.io/ipfs/"
          ),
          description: item.description,
          contract: item.contract.address,
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
    setCurrentPage(pageNumber);
  };

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
    setNftData(null);
  };

  const handleConfirm = () => {
    setNftData(selectedNft);
  };

  let currentNfts = [];
  if (nfts.length > 0) {
    const indexOfLastNft = currentPage * postsPerPage;
    const indexOfFirstNft = indexOfLastNft - postsPerPage;
    currentNfts = nfts.slice(indexOfFirstNft, indexOfLastNft);
  }

  return (
    !nftsAreLoading && (
      <>
        {nfts && currentNfts.length > 0 ? (
          currentNfts.map((nft, i) => {
            if (nft.imageUrl) {
              return (
                <Col
                  sm={4}
                  className="nft-card"
                  key={i}
                  onClick={() => clickNft(nft, i)}
                  style={{
                    border: nftIdx === i ? "5px solid blue" : "",
                    backgroundImage: `url("${nft.imageUrl}")`,
                  }}
                >
                  <h1>{nft.name}</h1>
                  <video src={nft?.imageUrl} autoPlay muted loop />
                </Col>
              );
            }
          })
        ) : (
          <></>
        )}
        {nfts.length >= 15 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={nfts.length}
            paginate={paginate}
          />
        )}
        <div className="center w-100">
          <button
            className="order-button"
            disabled={!selectedNft}
            onClick={handleConfirm}
          >
            Confirm NFT
          </button>
        </div>
      </>
    )
  );
};

export default NFTContainer;
