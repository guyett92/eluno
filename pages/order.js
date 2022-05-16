import React, { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import NFT from "../components/NFT";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";
import { WalletContext } from "../contexts/WalletContext";
import axios from "axios";

// TODO: Setup .env
const airtableApi = "keyjWXvJitkpQrk0V";

const sizeData = {
  0: "small",
  1: "medium",
  2: "large",
  3: "extra-large",
};

const Order = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    "eluno tee": false,
    "eluno hoodie": false,
  });
  const [dropdownValue, setDropdownValue] = useState({
    "eluno tee": -1,
    "eluno hoodie": -1,
  });
  const [nftsAreLoading, setNftsAreLoading] = useState(true);
  const [nfts, setNfts] = useState({});

  const context = useContext(AppContext);
  const walletContext = useContext(WalletContext);

  const getNFTs = async () => {
    try {
      console.log(context.store.connectedWallets.metamask);
      fetch(
        `https://api.opensea.io/api/v1/assets?owner=${context.store.connectedWallets.metamask}&order_direction=desc&offset=0&limit=20`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNFTs();
  }, []);

  // TODO: Capture wallet address, contractId, Image, and nftId as part of the order process
  // TODO: Capture NFT contract and verify it as part of the order process

  const toggle = (title) => {
    const currValue = dropdownOpen[title];
    title === "eluno tee"
      ? setDropdownOpen({ ...dropdownOpen, "eluno tee": !currValue })
      : setDropdownOpen({ ...dropdownOpen, "eluno hoodie": !currValue });
  };

  const changeValue = (sizeNum, title) => {
    title === "eluno tee"
      ? setDropdownValue({ ...dropdownValue, "eluno tee": sizeNum })
      : setDropdownValue({ ...dropdownValue, "eluno hoodie": sizeNum });
  };

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
    console.log(fetchedItems);
    setNfts(fetchedItems);
  };

  const checkNftContracts = async () => {
    // TODO: Check if NFT is part of a contract that we approve. If not, then have them request it in a new process
  };

  const addNftToPurchaseList = async () => {
    // TODO: Add NFT to the database we are using to store if they have purchased that NFT before
  };

  const checkNftForRepurchase = async () => {
    //TODO: Check if NFT has been purchased before - we might not need this. Not a worry right now
    const { data } = await axios.get(
      // https://airtable.com/appaR4vhmUf9FPP3m/api/docs#curl/table:table%201:list
      `https://api.airtable.com/v0/appaR4vhmUf9FPP3m/Table%201?api_key=${airtableApi}`
    );
    // console.log(data.records);
  };

  useEffect(() => {
    // TODO: Create cart as well without breaking this
    context.actions.fetchAllProducts();
  }, []);

  useEffect(() => {
    if (walletContext.store.connectedWallets?.metamask) {
      fetchNftByOwner();
    }
  }, [walletContext.store.connectedWallets.metamask]);

  useEffect(() => {
    // checkNftForRepurchase();
  });

  return (
    <Layout pageTitle="eluno | Order">
      <Header />
      <section className="section">
        <Container>
          {/* {context.store.products ? (
            <Row className="justify-content-md-center product-text">
              {context.store.products.map((product) => (
                <Col key={product.id} className="center">
                  <h1 className="center">{product.title}</h1>
                  <img
                    src={product.images[0].src}
                    className="image-container"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "10px 10px 5px rgb(211,211,211, 0.15)",
                    }}
                  />
                  <p className="text-center price">
                    {`$`}
                    {product.variants[0].price}
                  </p>
                  <Dropdown
                    className="center"
                    isOpen={dropdownOpen[product.title]}
                    toggle={() => {
                      toggle(product.title);
                    }}
                  >
                    <DropdownToggle caret>Size</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => {
                          changeValue(0, product.title);
                        }}
                      >
                        Small
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          changeValue(1, product.title);
                        }}
                      >
                        Medium
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          changeValue(2, product.title);
                        }}
                      >
                        Large
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => {
                          changeValue(3, product.title);
                        }}
                      >
                        Extra Large
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Button
                    disabled={dropdownValue[product.title] === -1}
                    onClick={() => {
                      console.log(
                        "product id",
                        product.variants[dropdownValue[product.title]].id
                      );
                      console.log(context.store.checkout);
                      context.actions.addItemToCart(
                        product.variants[dropdownValue[product.title]].id,
                        1
                      );
                    }}
                  >
                    {dropdownValue[product.title] === -1
                      ? `Choose a Size`
                      : `Add ${sizeData[dropdownValue[product.title]]} ${
                          product.title.split(" ")[1]
                        } to cart`}
                  </Button>
                </Col>
              ))}
            </Row>
          ) : (
            // TODO: Decide if I need to remove this
            <div>Loading</div>
          )} */}
          {nftsAreLoading && walletContext.store.connectedWallets?.metamask && (
            <div>Loading your NFTs...</div>
          )}
          {/* Once the NFTs are loaded */}
          {!nftsAreLoading && (
            <Row className="justify-content-md-center product-text">
              {/* Double check to see NFTs are available */}
              {nfts && nfts.length > 0
                ? nfts.map((nft) => {
                    // Check to see if there is an image uploaded for the collection
                    if (nft.imageUrl) {
                      return (
                        <Col className="center" key={nft.id}>
                          <NFT
                            imgSrc={nft?.imageUrl}
                            name={nft.name}
                            id={nft.id}
                            description={nft.description}
                          />
                        </Col>
                      );
                    }
                  })
                : // TODO: Add a component for those that don't have NFTs
                  "It seems you have no NFTs yet :("}
            </Row>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Order;
