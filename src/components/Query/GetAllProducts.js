import { client, Query } from "@tilework/opus";

export const getProducts = async (product) => {
  client.setEndpoint("http://localhost:4000/graphql");

  const queryProducts = new Query("product", true)
    .addArgument("id", "String!", product)
    .addFieldList([
      "id",
      "name",
      "inStock",
      "gallery",
      "description",
      "brand",
      "attributes {id, items {value, id}}",
      "prices {amount}",
    ]);

  return await client.post(queryProducts);
};

export default getProducts;
