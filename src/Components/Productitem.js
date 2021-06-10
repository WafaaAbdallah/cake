import { DeleteButtonStyled, Name} from "./Style"
import { ProductWrapper } from "./Style"
import DeleteButton from "../Components/buttons/DeleteButton";
import{Link} from "react-router-dom"
const Productitem = (props) => {
  return (
    <ProductWrapper>
      <Link to = {`/products/${props.product.slug}`}>
      <img
        src={props.product.image}
       
      
      /></Link>
      <Name>{props.product.name}</Name>
      <p>{props.product.price} $</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        productID={props.product.id}
      />
      
    </ProductWrapper>
  );
};
export default Productitem;
