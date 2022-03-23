import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart functionalities
  const [cart, setCart] = useState([]);

  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };
  // product funcionalies
  const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://watchcom-server.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
