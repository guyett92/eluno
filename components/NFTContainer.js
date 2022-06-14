import React, { useEffect, useContext, useState } from "react";
import ShopCard from "../components/ShopCard";
import Pagination from "./Pagination";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button
} from "reactstrap";
import { WalletContext } from "../contexts/WalletContext";
import { AppContext } from "../contexts/ContextProvider";
import axios from "axios";

const NFTContainer = () => {
  const [nfts, setNfts] = useState({});
  const [customItem, setCustomItem] = useState();
  const [displayPrice, setDisplayPrice] = useState(0);
  const [nftsAreLoading, setNftsAreLoading] = useState(true);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [clothSize, setClothSize] = useState('');
  const [clothSizeVariant, setClothSizeVariant] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const walletContext = useContext(WalletContext);
  const context = useContext(AppContext);

  useEffect(() => {
    context.store.products.map(product => {
      if (product.title === 'Custom NFT Clothes') {
        setCustomItem(product);
        setDisplayPrice(product.variants[0].price)
      }
    })
  }, [context]);

  useEffect(() => {
    const fetchNftByOwner = async () => {
      const { data } = await axios.get(
        // TODO: Once OpenSea gives me an API key, change to OpenSea
        // https://ethereum-api.rarible.org/v0.1/doc#operation/getNftItemById
        `https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=${walletContext.store.connectedWallets.metamask}`
      );
  
      setNftsAreLoading(false);

      let fetchedItems = data.items.filter((item) => item.meta.image.url.BIG);
      console.log(fetchedItems);
  
      fetchedItems = fetchedItems.map((item) => {
        return {
          id: item.id,
          name: item.meta.name,
          imageUrl: item.meta.image?.url.BIG,
          description: item.meta.description,
          contract: item.contract,
        };
      });

      // for (let i = 0; i < 30; i++) {
      //   fetchedItems.push({
      //     id: i + 1000,
      //     name: 'random' + i,
      //     imageUrl: "http://via.placeholder.com/300",
      //     description: "jajaja",
      //     contract: "contract deez nutz"
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
                  className="center nft-card" 
                  key={i}
                >
                  <ShopCard 
                    imgSrc={nft?.imageUrl}
                    name={nft.name}
                  />
                  <p className="text-center price">
                    {`$${displayPrice}`}
                  </p>
                  <Dropdown
                    className="center"
                    isOpen={dropDownOpen}
                    toggle={() => setDropDownOpen(!dropDownOpen)}
                  >
                    <DropdownToggle caret>Size</DropdownToggle>
                    <DropdownMenu>
                      {customItem ? 
                        customItem.variants.map((variant, i) => {
                          return(
                            <DropdownItem
                              onClick={() => {
                                setClothSize(variant.title.toLowerCase());
                                setClothSizeVariant(i);
                              }}
                              key={i}
                            >
                              {`${variant.title.toLowerCase()}`}
                            </DropdownItem>
                          )
                        }) :
                        <></>
                      }
                    </DropdownMenu>
                  </Dropdown>
                  <Button
                    className="addButton"
                    disabled={!clothSize.length}
                    onClick={async () => {
                      const cart = await context.actions.addItemToCart(
                        customItem.variants[clothSizeVariant].id,
                        1,
                        context.store.checkout.id,
                      )
                      const lineItems = cart.lineItems
                      let lineItemId;
                      for (let i = 0; i < lineItems.length; i++) {
                        if (lineItems[i].variant.title.toLowerCase() === clothSize.toLowerCase()) {
                          lineItemId = lineItems[i].id;
                        }
                      }
  
                      await context.actions.addNftData({
                        nftId: nft.id, 
                        shopifyId: customItem.variants[clothSizeVariant].id,
                        lineItemId: lineItemId,
                        wallet: localStorage.getItem("address"), 
                        img: nft?.imageUrl,
                        checkoutId: context.store.checkout.id,
                      })
                    }}
                  >
                    {dropDownOpen
                      ? `Choose a Size`
                      : `Add ${clothSize} ${nft.name} to cart`}
                  </Button>
                </Col>
              )
            }
          }) :
          <></>
        }
        {currentNfts > 15 && 
          <Pagination postsPerPage={postsPerPage} totalPosts={nfts.length} paginate={paginate} />    
        }
      </>
    )                      
  );
};

export default NFTContainer;
