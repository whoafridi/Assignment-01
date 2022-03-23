import React, {useState, useEffect} from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://watchcom-server.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  return { products };
}

export default useProducts;