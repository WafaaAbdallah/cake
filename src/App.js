import Home from "./Components/Home";
import Productslist from "./Components/Productslist";
import Details from "./Components/Details";
import _products from "./Products";
import { Route, Switch } from "react-router";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, ThemeButton } from "./Components/Style";
import Navbar from "./Components/NavBar"
function App() {
  const [currentTheme, setcurrentTheme] = useState(theme.light);
  const [iconName, seticonName] = useState("Dark theme");
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(_products);
  const deleteProduct = (productID) => {
    const filtersProduct = products.filter(
      (product) => productID !== product.id
    );
    setProducts(filtersProduct);
  };
  const setView = () => {
    if (product) {
      return <Details product={product} setProduct={setProduct} />;
    } else {
      return (
        <Productslist
          setProduct={setProduct}
          products={products}
          deleteProduct={deleteProduct}
        />
      );
    }
  };
  //
  const changeTheme = () => {
    if (currentTheme === theme.light) {
      setcurrentTheme(theme.dark);
    } else {
      seticonName("Light theme");
    }
    if (currentTheme === theme.dark) {
      setcurrentTheme(theme.light);
    } else {
      seticonName("Dark theme");
    }
  };

  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ThemeButton onClick={changeTheme}> {iconName} </ThemeButton>
        <Navbar 
        iconName ={iconName}/>
        <Switch>
          <Route path="/products">
            <Productslist
              setProduct={setProduct}
              products={products}
              deleteProduct={deleteProduct}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path= "/products/:productSlug">
          <Details products={products} deleteProduct={deleteProduct}/>
          </Route>
        </Switch>
        {/* <Home /> */}
        {/* {setView()}; */}
        {/* <Productslist setProduct={setProduct} />
        <Details product={product} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
