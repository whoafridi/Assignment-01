import ProductDetail from "../ProductDetail/ProductDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const { id } = useParams();

  const [service, setService] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch(`https://watchcom-server.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  useEffect(() => {
    const values = service.filter((s) => s._id === id);
    setSingle(values);
  }, [service]);

  return (
    <>
      <NavBar></NavBar>
      {service.length === 0 ? (
        <>
          <h2 className="loading">loading from api .. .. </h2>
        </>
      ) : (
        <>
          {single.map((s) => (
            <ProductDetail key={s._id} s={s} />
          ))}
        </>
      )}

      <Footer />
    </>
  );
};

export default Detail;
