import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ShopCard from "../components/ShopCard";
import { Carousel } from 'react-responsive-carousel';
import {
  Container,
  Row,
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";

const ShopifyCarousel = () => {
  const [products, setProducts] = useState([{"imgSrc":"http://dummyimage.com/374x505.png/cc0000/ffffff","name":"Willie","shopifyId":"b3902dfb-a1cb-4e42-9c26-4a58b351b1dd","price":357.48,"checkoutId":"752101e7-1ca1-448c-ba47-92a37e1746d9"},
  {"imgSrc":"http://dummyimage.com/344x467.png/5fa2dd/ffffff","name":"Rutledge","shopifyId":"01c3960e-01ef-4f4a-8fec-51de7642573c","price":416.0,"checkoutId":"da9864ec-154a-448a-b49e-7978283f4f27"},
  {"imgSrc":"http://dummyimage.com/547x574.png/cc0000/ffffff","name":"Caresse","shopifyId":"4744d5c2-7904-40ea-bd8c-7202254f3535","price":574.79,"checkoutId":"84415b92-1912-499c-9f5e-cffe755e92f4"},
  {"imgSrc":"http://dummyimage.com/377x384.png/5fa2dd/ffffff","name":"Sawyere","shopifyId":"f9271d1d-3456-4e66-a0d3-13fb5bbdfd3d","price":497.89,"checkoutId":"a7adbda6-407d-4a3e-b0a0-216709f9c058"},
  {"imgSrc":"http://dummyimage.com/369x485.png/cc0000/ffffff","name":"Claudia","shopifyId":"f45d1d5a-dc24-4f53-aeb7-35d5d00b4b29","price":443.47,"checkoutId":"e8f2ec90-2b99-4cd8-a227-5527b34f2d7c"},
  {"imgSrc":"http://dummyimage.com/289x444.png/dddddd/000000","name":"Jameson","shopifyId":"bfb8776e-c18c-45f1-9e8f-b8c0a22c1a78","price":369.78,"checkoutId":"39da1a2f-abc0-4904-b713-469fdbce1fb2"},
  {"imgSrc":"http://dummyimage.com/481x420.png/ff4444/ffffff","name":"Mandy","shopifyId":"77385195-bce5-4798-9a60-c476a00879d6","price":450.4,"checkoutId":"cb82579e-05bc-4cdb-a7ce-224225a54ec7"},
  {"imgSrc":"http://dummyimage.com/415x350.png/5fa2dd/ffffff","name":"Dierdre","shopifyId":"140c0390-29b3-4b0f-acf0-7b2e8a8d6df7","price":397.54,"checkoutId":"d08cd01d-6fe0-4290-8839-ebb4007ee1ea"},
  {"imgSrc":"http://dummyimage.com/250x269.png/cc0000/ffffff","name":"Austine","shopifyId":"1ddc6562-108b-437a-9292-b73a751771d5","price":430.69,"checkoutId":"b3a3dba3-8cb6-4970-bbe7-601840072c8c"},
  {"imgSrc":"http://dummyimage.com/336x515.png/ff4444/ffffff","name":"Rodolphe","shopifyId":"9489ca1b-d204-4a8a-b11c-a42a04dab871","price":482.19,"checkoutId":"e6bf2f88-68a7-4e54-af4d-a6bc821cfa65"},
  {"imgSrc":"http://dummyimage.com/448x515.png/ff4444/ffffff","name":"Isaiah","shopifyId":"880fc7a1-7713-4004-8c58-1e39b26fd477","price":485.93,"checkoutId":"56006663-7a67-44da-b2a8-55de7b8d700c"},
  {"imgSrc":"http://dummyimage.com/438x363.png/5fa2dd/ffffff","name":"Maureene","shopifyId":"b8e4db5b-1998-4f5d-ad1e-e8cdad0423b5","price":374.37,"checkoutId":"28d92d9d-bec9-4070-aa1d-e1ac7423399c"},
  {"imgSrc":"http://dummyimage.com/463x433.png/cc0000/ffffff","name":"Mirna","shopifyId":"41b8d380-2b8d-4c87-82f9-d65b21aa0757","price":444.13,"checkoutId":"e80d7311-7100-4ac1-a033-a2d382999894"},
  {"imgSrc":"http://dummyimage.com/346x398.png/cc0000/ffffff","name":"Gerrie","shopifyId":"01dd447a-eb20-4508-abbc-788420682240","price":562.26,"checkoutId":"72167c6c-d87d-4616-af98-c6756152767e"},
  {"imgSrc":"http://dummyimage.com/283x304.png/cc0000/ffffff","name":"Angil","shopifyId":"9e504f6b-1f6a-4c69-94f6-8b19ff17635f","price":575.87,"checkoutId":"596337b4-2279-4636-966b-0ab0a76e2a1f"}]);
  const [displayPrice, setDisplayPrice] = useState(products[0].price);
  const [displayName, setDisplayName] = useState(products[0].name);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [clothSize, setClothSize] = useState('');
  const context = useContext(AppContext);

  // useEffect(() => {
  //   const nonCustomItems = [];
  //   context.store.products.map(product => {
  //     if (product.title !== 'Custom NFT Clothes') {
  //       nonCustomItems.push(product);
  //     }
  //   })
  //   setProducts(nonCustomItems);
  // }, [context]);

  return (
    <>
      <Carousel 
        showThumbs={false} 
        infiniteLoop={true}
        onChange={(i) => {
          setDisplayPrice(products[i].price);
          setDisplayName(products[i].name)
        }}
      >
        {products.length && 
          products.map((product) => {
            return (
              <Col key={product.id} className="center">
                <ShopCard 
                  // imgSrc={product.images[0].src}
                  imgSrc={product.imgSrc}
                  // name={product.title}
                  name={product.name}
                  // shopifyId={product.variants[product.variants.length - 1].id}
                  shopifyId={product.shopifyId}
                  // price={product.variants[0].price}
                  price={product.price}
                  checkoutId={context.store.checkout.id}
                />
              </Col>
            )
          })
        }
      </Carousel>
      <p className="text-center price">
				{`$`}
				{displayPrice}
			</p>
      <Dropdown
				className="center"
				isOpen={dropDownOpen}
				toggle={() => setDropDownOpen(!dropDownOpen)}
			>
				<DropdownToggle caret>Size</DropdownToggle>
				<DropdownMenu>
					<DropdownItem
						onClick={() => setClothSize('small')}
					>
						Small
					</DropdownItem>
					<DropdownItem
						onClick={() => setClothSize('medium')}
					>
						Medium
					</DropdownItem>
					<DropdownItem
						onClick={() => setClothSize('large')}
					>
						Large
					</DropdownItem>
					<DropdownItem
						onClick={() => setClothSize('extra large')}
					>
						Extra Large
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
      <Button
				className="addButton"
				disabled={!clothSize.length}
				onClick={async () => {
					await context.actions.addItemToCart(
						shopifyId,
						1,
						checkoutId,
					)

					if (nftId) {
						await context.actions.addNftData(
						nftId, 
						shopifyId,
						lineItemId,
						localStorage.getItem("address"), 
						imgSrc, 
						checkoutId
						)
					}
				}}
			>
				{dropDownOpen
					? `Choose a Size`
					: `Add ${clothSize} ${displayName} to cart`}
			</Button>
    </>
  )
}

export default ShopifyCarousel;