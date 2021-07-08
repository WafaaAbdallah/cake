
import { NavProduct, Logo } from "./Style";


const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/" className="navbar-brand">
        
      </Logo>
      <div className="navbar-nav ml-auto">
        <>
          Home
        </>
        <NavProduct
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          {" "}
          products
        </NavProduct>
        <NavProduct
          to="/shops"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          {" "}
          shops
        </NavProduct>

        <NavProduct
          to="/signup"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          {" "}
          signup
        </NavProduct>
        
      </div>
    </nav>
  );
};

export default NavBar;