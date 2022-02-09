import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [cart, setCart] = useState([]);

  // add a handlecart method
  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  }
  return (<>
    <NavBar cart={cart}></NavBar>
    <Hero/>
    <Products handleAddToCart={handleAddToCart} />
    <Footer/>
  </>);
};

export default Home;
