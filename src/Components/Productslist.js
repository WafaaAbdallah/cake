import { ListWrapper } from "./Style";
// import Products from "../Products";
import Productitem from "./Productitem";
import SearchBar from "./SearchBar";
import { useState } from "react";


const Product = (props) => {
  const [query,setQuery]=useState("");

// let arrayOfProducts= Products
// .filter.((list)=>Product.name.toLowerCase().includes.toLowerCase())
// .map.(Product)=> <Product key={Product.Id} Product={Product}/>
const list = props.products.filter((product)=> product.name.includes(query)).map((product) => 
 <Productitem product ={product} setProduct={props.setProduct} deleteProduct={props.deleteProduct} 
 key = {product.id} />)
 
    return (
      <>
      <SearchBar setQuery={setQuery}/>
      
      <ListWrapper>{list}</ListWrapper>
    </>
      

  );

  
  };

export default Product;

