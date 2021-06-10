
import { DetailWrapper } from "./Style";
import DeleteButton from "../Components/buttons/DeleteButton";
import {useParams, Redirect} from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug =useParams().productSlug
  const product= props.products.find((product)=>product.slug===productSlug)
  if(!product )return <Redirect to ="/"/>


  return (
    <DetailWrapper>
      <img
        src={props.product.image}
        alt={props.product.name}
   
      />
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <p>{product.description}</p>
      <button onClick={()=>props.setProduct (null)
      }> go Back </button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={props.product.id}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default ProductDetail;