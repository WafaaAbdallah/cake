import { Link } from "react-router-dom";
import { NavProduct, Logo } from "./Style";
import Light from "../Light.png";
import Dark from "../Dark.jpg";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/" className="navbar-brand">
        <img src={props.iconName === "Light theme" ? Light : Dark} />
      </Logo>
      <div className="navbar-nav ml-auto">
        <Link to="/">Home</Link>
        <NavProduct to="/products" className="nav-item">
          Products
        </NavProduct>
      </div>
    </nav>
  );
};
export default Navbar;
