import { useState } from "react";
import ShopItem from "./ShopItem";
import { ProductList } from "../Style";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
const ShopList = () => {
  const [query, setQuery] = useState("");
  const shops = useSelector((state) => state.shops.shops);
  let filtered = shops
    .filter((shop) => shop.name.toUpperCase().includes(query.toUpperCase()))
    .map((shop) => (
      <ShopItem
        shop={shop}
         key={shop.id}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductList>{filtered}</ProductList>

    </>
  );
};

export default ShopList;
