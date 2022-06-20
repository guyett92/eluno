import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "9170dc05e5361ceb52efd36bc1c24332",
  domain: "eluno-io.myshopify.com",
});

export { client };
