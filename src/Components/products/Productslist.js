import { useState } from "react";
import ProductsItem from "./Productitem";
import { ProductList } from "../Style";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";


const Productslist = () => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products.products);
  let filtered = products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => (
      <ProductsItem
        product={product}
        
        key={product.id}
        
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductList>{filtered}</ProductList>
    
    </>
  );
};

export default Productslist;
