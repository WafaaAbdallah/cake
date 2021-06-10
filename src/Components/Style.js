
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  
  color: red;
`;


export const Head = styled.h1`
  font-size: xx-large;
  font-style: italic;
  font-weight: bolder;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const Desc = styled.p`
  text-align: center;
  font-size: larger;
  font-weight: 600;
  font-style: oblique;
  color: ${(props) => props.theme.textColor};
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ProuductImage = styled.img`
  size: 20px;
  width: 200px;
  height: 200px;
`;

export const Productlist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 30%;
  margin-right: 30%;
`;

export const theme = {
  light: {
    mainColor: "#005a8d",
    backgroundColor: "#fff5fd", 
    textColor: "#ff96ad",
  },
  
  dark: {
    mainColor: "#005a8d",
    backgroundColor: "#232323",
    textColor: "#fdfaf6",
  },
};

// export const GlobalStyle = GlobalStyle`
// body {
//     background-color: ${(props) => props.theme.backgroundColor}
// }
// `;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;
export const DeleteButtonStyled = styled.button`
font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  `
  export const NavProduct =styled(NavLink)`
background: grey;
&.active {background: #fdfaf6}

  `
  export const Logo =styled(Link)`
color: red;
.img{height:5px;
width:5px;
border-raduis: 50%}


  `