//components
import Routes from "./Components/routes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStayle, ThemeButton } from "./Components/Style";



import NavBar from "./Components/NavBar";

function App() {
  const products = useSelector((state) => state.products.products);
  const loadingProducts = useSelector((state) => state.products.loading);
  const loadingShops = useSelector((state) => state.products.loading);
  const [currentTheme, setcurrentTheme] = useState(theme.light);
  const [iconName, seticonName] = useState("Dark theme");
  const changeTheme = () => {
    if (currentTheme === theme.light) {
      setcurrentTheme(theme.dark);
      seticonName("Light theme");
    }
    if (currentTheme === theme.dark) {
      setcurrentTheme(theme.light);
      seticonName("Dark theme");
    }
  };
  
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStayle />
        <ThemeButton onClick={changeTheme}> {iconName} </ThemeButton>
        <NavBar iconName={iconName} />
        {loadingProducts || loadingShops ? (
          <h3>loading...</h3>
        ) : (
          <Routes products={products} />
        )}

       
      </ThemeProvider>
    </div>
  );
}
export default App;
