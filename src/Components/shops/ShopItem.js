import { ProuductImage } from "../Style";

import { Link } from "react-router-dom";


const ShopItem = (props) => {
  
  return (
    <div>
      <Link to={`/shops/${props.shop.id}`}>
        <ProuductImage src={props.shop.image} />
      </Link>
      <p>{props.shop.name}</p>

     
    </div>
  );
};

export default ShopItem;
