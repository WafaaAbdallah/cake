import { DetailWrapper, ProuductImage, UpdateButtonStyled } from "../Style";
import { useParams, Redirect, Link } from "react-router-dom";
import Productslist from "../products/Productslist";
import { useSelector } from "react-redux";


const ShopDetail = () => {
  const shopId = useParams().shopId;
  console.log(useParams().shopId);
  
  const shops = useSelector((state) => state.shops.shops);
  const shop = shops.find((shop) => shop.id === +shopId);
  if (!shop) return <Redirect to="/" />;

  return (
    <div>
      <DetailWrapper>
        <h1>{shop.name}</h1>
        <ProuductImage src={shop.image} alt={shop.name} />
        <Link to="/shops">
          <button>Back</button>
        </Link>
         <Link to={`/shops/${shop.id}/products/new`}>
          <UpdateButtonStyled>add product</UpdateButtonStyled>
        </Link>
      </DetailWrapper>
      <div className="col-12">
        <Productslist products={shop.products} />
      </div>
    </div>
  );
};

export default ShopDetail;
